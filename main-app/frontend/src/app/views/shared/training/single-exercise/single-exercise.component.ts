import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormArray,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { IonSelect, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, combineLatest, EMPTY, from, Observable, Subject } from 'rxjs';
import { delay, finalize, map, switchMap, take, takeUntil } from 'rxjs/operators';
import { MESSAGE_DURATION } from '../../../../constants/shared/message-duration.const';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { GeneralResponseData } from '../../../../models/common/general-response.model';
import { DEFAULT_WEIGHT_UNIT } from '../../../../constants/shared/default-weight-format.const';
import { Exercise } from '../../../../models/training/exercise.model';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { Set } from '../../../../models/training/shared/set.model';
import { SingleExercise } from '../../../../models/training/shared/single-exercise.model';
import {
    ExerciseValueType,
    ExerciseFormType,
    SingleExerciseFormType,
    SingleExerciseValueType,
} from '../../../../models/training/shared/single-exercise-form.type';
import { ToastControllerService } from '../../../../services/shared/toast-controller.service';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { NewTrainingService } from '../../../../services/api/training/new-training.service';
import * as SingleExerciseValidators from '../../../../validators/training/single-exercise.validators';
import {
    DeleteExerciseDialogData,
    DeleteExerciseDialogComponent,
    DialogData,
} from '../../delete-exercise-dialog/delete-exercise-dialog.component';
import { DialogRoles } from '../../../../constants/enums/model-roles.enum';
import { NewTrainingStoreService } from '../../../../services/store/training/new-training-store.service';
import { SetsComponent } from '../set/set.component';
import { PreferencesStoreService } from '../../../../services/store/shared/preferences-store.service';
import { WeightUnit } from '../../../../models/common/preferences.type';
import { StreamData } from '../../../../models/common/common.model';
import {
    SetCategoryType,
    SetConstituentExistsType,
} from '../../../../models/training/shared/set.type';
import { isNeverCheck } from '../../../../helpers/is-never-check.helper';

@Component({
    selector: 'bl-single-exercise',
    templateUrl: './single-exercise.component.html',
    styleUrls: ['./single-exercise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [getControlValueAccessor(SingleExerciseComponent), UnsubscribeService],
})
export class SingleExerciseComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private readonly _isExerciseChanged$: Subject<SetConstituentExistsType> =
        new Subject<SetConstituentExistsType>();
    private readonly _isSubmitted$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private readonly _isExercisePicker$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        true,
    );
    private readonly _isApiLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    readonly isExerciseChanged$: Observable<SetConstituentExistsType> =
        this._isExerciseChanged$.asObservable();
    readonly isSubmitted$: Observable<boolean> = this._isSubmitted$.asObservable();
    readonly isExercisePicker$: Observable<boolean> = this._isExercisePicker$.asObservable();
    readonly isApiLoading$: Observable<boolean> = this._isApiLoading$.asObservable();
    readonly currentExercisesState$: Observable<SingleExercise[]> =
        this._newTrainingStoreService.currentTrainingChanged$.pipe(
            map((currentTrainingState: NewTraining) => currentTrainingState.exercises),
        );
    readonly isAddingExercisesAllowed$: Observable<boolean> = combineLatest([
        this.currentExercisesState$,
        this._newTrainingStoreService.allExercisesChanged$.pipe(
            map((value: StreamData<Exercise[]>) => value.Value),
        ),
    ]).pipe(
        delay(0),
        map(([trainingState, allExercises]: [SingleExercise[], Exercise[]]) => {
            //TODO: Fix
            if (this.getExercises().length > 0) {
                if (this.setsCmpRef) {
                    return (
                        trainingState.length <= allExercises.length &&
                        this.accessFormGroup<SingleExerciseFormType, ExerciseValueType>(
                            'exerciseData',
                            'name',
                            this.getExercises().length - 1,
                        )?.value &&
                        this.getExercises().length > 0 &&
                        this._areSetsValid(this.setsCmpRef)
                    );
                }
                return false;
            } else {
                return true;
            }
        }),
    );

    readonly form = new FormArray<FormGroup<SingleExerciseFormType>>([]);

    onTouched: () => void;

    @Input()
    editTrainingData: NewTraining;

    @Input()
    bodyweight: AbstractControl | null;

    @Input()
    trainingDate: AbstractControl | null;

    @Input()
    isLoading = false;

    @Input()
    editMode = false;

    @Output()
    readonly exerciseAdded: EventEmitter<UIEvent> = new EventEmitter();

    @ViewChildren('exercisePicker')
    exercisePickerEls: QueryList<IonSelect>;

    @ViewChildren(SetsComponent)
    setsCmpRef: QueryList<SetsComponent>;

    constructor(
        private readonly _newTrainingStoreService: NewTrainingStoreService,
        private readonly _newTrainingService: NewTrainingService,
        private readonly _unsubscribeService: UnsubscribeService,
        private readonly _preferencesStoreService: PreferencesStoreService,
        private readonly _translateService: TranslateService,
        private readonly _toastControllerService: ToastControllerService,
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private readonly _modalController: ModalController,
    ) {}

    get currentWeightUnit(): WeightUnit {
        return this._preferencesStoreService.getPreferences().weightUnit ?? DEFAULT_WEIGHT_UNIT;
    }

    ngOnInit(): void {
        this.form.setValidators([
            SingleExerciseValidators.checkDuplicateExerciseName(),
            SingleExerciseValidators.checkExerciseNumber(),
        ]);
        this.form.updateValueAndValidity();

        this._translateService.onLangChange
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((_) => {
                this._isExercisePicker$.next(false);
                setTimeout(() => this._isExercisePicker$.next(true), 1);
            });
    }

    ngOnDestroy(): void {
        this._isSubmitted$.complete();
        this._isExercisePicker$.complete();
        this._isApiLoading$.complete();
        this._isExerciseChanged$.complete();
    }

    writeValue(exercises: SingleExercise[]): void {
        if (exercises && exercises?.length > 0) {
            while (this.form.length !== 0) {
                this.form.removeAt(0);
            }
            for (const exercise of exercises) {
                this.addExercise(exercise);
            }
        }
    }

    registerOnChange(fn: (formValue: SingleExerciseValueType[]) => void): void {
        this.form.valueChanges.pipe(takeUntil(this._unsubscribeService)).subscribe(fn);
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    onExerciseNameChange(indexExercise: number, element: IonSelect): void {
        if (element?.value) {
            this._newTrainingStoreService.currentTrainingChanged$
                .pipe(
                    take(1),
                    switchMap((currentTrainingState: NewTraining) => {
                        const selectedExerciseData = currentTrainingState.exercises[
                            indexExercise
                        ].availableExercises.find(
                            (exercise: Exercise) => exercise.name === (element.value as string),
                        );
                        this.accessFormGroup<SingleExerciseFormType, ExerciseValueType>(
                            'exerciseData',
                            'imageUrl',
                            indexExercise,
                        ).patchValue(selectedExerciseData.imageUrl);
                        this.accessFormGroup<SingleExerciseFormType, ExerciseValueType>(
                            'exerciseData',
                            'primaryMuscleGroup',
                            indexExercise,
                        ).patchValue(selectedExerciseData.primaryMuscleGroup);
                        return this._newTrainingStoreService.updateExerciseChoices(
                            element.value as string,
                            indexExercise,
                            currentTrainingState,
                            selectedExerciseData,
                        );
                    }),
                )
                .subscribe((updatedTraining: NewTraining) => {
                    this._isExerciseChanged$.next(
                        this._prepareSet(
                            updatedTraining.exercises[indexExercise].exerciseData
                                .primarySetCategory,
                        ),
                    );
                });
        }
    }

    addExercise(exercise?: SingleExercise, event?: UIEvent): void {
        if (exercise) {
            const { weightLifted, reps } = this._prepareSet(
                exercise.exerciseData.primarySetCategory,
            );
            exercise = {
                ...exercise,
                sets: [...exercise.sets].map((set: Set) => {
                    if (!weightLifted) {
                        delete set.weightLifted;
                    }
                    if (!reps) {
                        delete set.reps;
                    }
                    return set;
                }),
            };
        }
        this.form.push(
            new FormGroup<SingleExerciseFormType>({
                exerciseData: new FormGroup<ExerciseFormType>({
                    name: new FormControl(exercise?.exerciseData?.name ?? '', [
                        Validators.required,
                    ]),
                    imageUrl: new FormControl(exercise?.exerciseData?.imageUrl ?? ''),
                    primaryMuscleGroup: new FormControl(
                        exercise?.exerciseData?.primaryMuscleGroup ?? '',
                    ),
                }),
                sets: new FormControl(exercise?.sets ?? [], { nonNullable: true }),
            }),
        );
        if (event) {
            this._newTrainingStoreService
                .addNewExercise(this._getAlreadyUsedExercises())
                .pipe(takeUntil(this._unsubscribeService))
                .subscribe((_) => this.exerciseAdded.next(event));
        }
    }

    async deleteExercise(indexExercise: number, exerciseName: string): Promise<void> {
        if (exerciseName) {
            const modal = await this._modalController.create({
                component: DeleteExerciseDialogComponent,
                componentProps: {
                    isError: false,
                    deleteExercise: {
                        message$: this._translateService.stream(
                            'training.new_training.delete_exercise_prompt',
                        ),
                        exerciseName: exerciseName,
                    } as DeleteExerciseDialogData,
                } as DialogData,
                keyboardClose: true,
                swipeToClose: true,
            });
            await modal.present();

            from(modal.onDidDismiss<boolean>())
                .pipe(
                    switchMap((response: OverlayEventDetail<boolean>) => {
                        if (response.role === DialogRoles.DELETE_EXERCISE) {
                            return this._newTrainingStoreService.currentTrainingChanged$.pipe(
                                take(1),
                                switchMap((currentTrainingState: NewTraining) =>
                                    this._newTrainingStoreService.deleteExercise(
                                        currentTrainingState,
                                        exerciseName,
                                    ),
                                ),
                                switchMap((data: [NewTraining, Exercise[]]) => {
                                    this._isExerciseChanged$.next();
                                    this.form.removeAt(indexExercise);
                                    return this._newTrainingStoreService.pushToAvailableExercises(
                                        data[0],
                                        data[1],
                                    );
                                }),
                            );
                        } else {
                            return EMPTY;
                        }
                    }),
                    finalize(() => this._changeDetectorRef.markForCheck()),
                    takeUntil(this._unsubscribeService),
                )
                .subscribe();
        } else {
            this._newTrainingStoreService.currentTrainingChanged$
                .pipe(
                    take(1),
                    switchMap((currentTrainingState: NewTraining) =>
                        this._newTrainingStoreService.deleteExercise(
                            currentTrainingState,
                            null,
                            indexExercise,
                        ),
                    ),
                    takeUntil(this._unsubscribeService),
                )
                .subscribe((_) => this.form.removeAt(indexExercise));
        }
    }

    getExercises(): FormGroup<SingleExerciseFormType>[] {
        return this.form.controls;
    }

    accessFormField<T>(
        formField: keyof T,
        indexExercise: number,
    ): AbstractControl<T[typeof formField]> {
        return this.form.at(indexExercise)?.get(formField as string);
    }

    accessFormGroup<T, K>(
        formGroup: keyof T,
        formField: keyof K,
        indexExercise: number,
    ): AbstractControl<K[typeof formField]> {
        return this.form
            .at(indexExercise)
            .get(formGroup as string)
            ?.get(formField as string);
    }

    onSubmit(): void {
        this._isSubmitted$.next(true);
        const newTrainingFormValid = this.bodyweight.valid && this.trainingDate.valid;
        if (!this.form.valid || !this._areSetsValid(this.setsCmpRef) || !newTrainingFormValid) {
            return;
        }
        this._isApiLoading$.next(true);

        this._gatherAllFormData()
            .pipe(
                switchMap((apiNewTraining: NewTraining) => {
                    if (this.editMode) {
                        return this._newTrainingService.updateTraining(
                            apiNewTraining,
                            this.editTrainingData._id,
                        );
                    } else {
                        return this._newTrainingService.addTraining(apiNewTraining);
                    }
                }),
                finalize(() => this._isApiLoading$.next(false)),
            )
            .subscribe(async (response: GeneralResponseData) => {
                await this._toastControllerService.displayToast({
                    message: this._translateService.instant(response.Message),
                    duration: MESSAGE_DURATION.GENERAL,
                    color: 'primary',
                });
            });
    }

    private _gatherAllFormData(): Observable<NewTraining> {
        return this._newTrainingStoreService.currentTrainingChanged$.pipe(
            take(1),
            map((currentTrainingState: NewTraining) => {
                let exerciseFormData: SingleExercise[] = [];

                this.getExercises().forEach((_exercise: AbstractControl, indexExercise: number) => {
                    const total = currentTrainingState.exercises[indexExercise].total;
                    const exerciseData: Exercise = {
                        name: this.accessFormGroup<SingleExerciseFormType, ExerciseValueType>(
                            'exerciseData',
                            'name',
                            indexExercise,
                        ).value,
                        imageUrl: this.accessFormGroup<SingleExerciseFormType, ExerciseValueType>(
                            'exerciseData',
                            'imageUrl',
                            indexExercise,
                        ).value,
                        primaryMuscleGroup: this.accessFormGroup<
                            SingleExerciseFormType,
                            ExerciseValueType
                        >('exerciseData', 'primaryMuscleGroup', indexExercise).value,
                        translations:
                            currentTrainingState.exercises[indexExercise].exerciseData.translations,
                        setCategories:
                            currentTrainingState.exercises[indexExercise].exerciseData
                                .setCategories,
                        primarySetCategory:
                            currentTrainingState.exercises[indexExercise].exerciseData
                                .primarySetCategory,
                    };
                    const initialExercise = {
                        exerciseData,
                        sets: [],
                        total,
                        availableExercises:
                            currentTrainingState.exercises[indexExercise]?.availableExercises || [],
                    } as SingleExercise;
                    exerciseFormData = [...exerciseFormData, initialExercise];

                    const formSetData: Set[] = [];
                    (
                        this.accessFormField<SingleExerciseValueType>('sets', indexExercise)
                            .value as Set[]
                    ).forEach((set: Set) => {
                        const apiSet: Set = {
                            setNumber: +set.setNumber,
                            weightLifted: +set.weightLifted,
                            reps: +set.reps,
                        };
                        formSetData.push(apiSet);
                    });
                    exerciseFormData = [...exerciseFormData].map(
                        (exercise: SingleExercise, index: number) => {
                            if (index === indexExercise) {
                                return {
                                    ...exercise,
                                    sets: formSetData,
                                };
                            }
                            return exercise;
                        },
                    );
                });

                return {
                    exercises: exerciseFormData,
                    bodyweight: this.bodyweight.value ? +this.bodyweight.value : null,
                    trainingDate: new Date(this.trainingDate.value) ?? new Date(),
                    editMode: this.editMode,
                    userId: currentTrainingState.userId,
                    weightUnit: currentTrainingState.weightUnit,
                } as NewTraining;
            }),
        );
    }

    private _getAlreadyUsedExercises(): string[] {
        const alreadyUsedExercises: string[] = [];
        for (const exercise of this.getExercises()) {
            if (exercise.get('exerciseData.name').value) {
                alreadyUsedExercises.push(exercise.get('exerciseData.name').value);
            }
        }
        return alreadyUsedExercises;
    }

    private _areSetsValid(setsCmpRef: QueryList<SetsComponent>): boolean {
        let errors: string[] = [];
        setsCmpRef.forEach((setCmp) => {
            const form = setCmp.form;
            if (form?.errors) {
                const mappedKeys: string[] = Object.keys(form.errors).map(
                    (key: string) => key as string,
                );
                errors = errors.concat(mappedKeys);
            }
            form.controls.forEach((group: AbstractControl) => {
                if (group?.errors) {
                    const mappedKeys: string[] = Object.keys(group.errors).map(
                        (key: string) => key as string,
                    );
                    errors = errors.concat(mappedKeys);
                }
            });
        });
        return errors.length === 0;
    }

    private _prepareSet(primarySetCategory: SetCategoryType): SetConstituentExistsType {
        let weightLifted: boolean;
        let reps: boolean;
        switch (primarySetCategory) {
            case 'dynamicBodyweight': {
                weightLifted = false;
                reps = true;
                break;
            }
            case 'dynamicWeighted': {
                weightLifted = true;
                reps = true;
                break;
            }
            case 'freeWeighted': {
                weightLifted = true;
                reps = true;
                break;
            }
            case 'staticBodyweight': {
                //TODO: BL-128
                break;
            }
            case 'staticWeighted': {
                //TODO: BL-123
                break;
            }
            default: {
                isNeverCheck(primarySetCategory);
            }
        }
        return {
            weightLifted,
            reps,
        };
    }
}
