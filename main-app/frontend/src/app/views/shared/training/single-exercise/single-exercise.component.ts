import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, UntypedFormArray, Validators } from '@angular/forms';
import { IonSelect, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, combineLatest, EMPTY, from, Observable, of, Subject } from 'rxjs';
import { delay, finalize, map, startWith, switchMap, take, takeUntil } from 'rxjs/operators';
import { MESSAGE_DURATION } from '../../../../constants/shared/message-duration.const';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { GeneralResponseData } from '../../../../models/common/general-response.model';
import { DEFAULT_WEIGHT_UNIT } from '../../../../constants/shared/default-weight-format.const';
import { Exercise } from '../../../../models/training/exercise.model';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { SetStateChanged, SetTrainingData } from '../../../../models/training/shared/set.model';
import { Set } from '../../../../models/training/shared/set.model';
import { SingleExercise } from '../../../../models/training/shared/single-exercise.model';
import { FormControlExerciseData, SingleExerciseFormControlType, SingleExerciseFormGroupType } from '../../../../models/training/shared/single-exercise-form.type';
import { ToastControllerService } from '../../../../services/shared/toast-controller.service';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { NewTrainingService } from '../../../../services/api/training/new-training.service';
import * as SingleExerciseValidators from '../../../../validators/training/single-exercise.validators';
import { DeleteExerciseDialogData, DeleteExerciseDialogComponent, DialogData } from '../../delete-exercise-dialog/delete-exercise-dialog.component';
import { DialogRoles } from '../../../../constants/enums/model-roles.enum';
import { NewTrainingStoreService } from '../../../../services/store/training/new-training-store.service';
import { TOTAL_INITIAL_WEIGHT } from '../../../../constants/training/new-training.const';
import { SetsComponent } from '../sets/sets.component';
import { PreferencesStoreService } from '../../../../services/store/shared/preferences-store.service';
import { WeightUnit } from '../../../../models/common/preferences.type';
import { Translations } from '../../../../models/common/translations.model';
import { FormType } from '../../../../models/common/form.type';
import { ModelWithoutIdType } from '../../../../models/common/raw.model';

type SingleExerciseFormType = {
    [P in keyof Omit<FormType<SingleExercise>, 'availableExercises'>]:
        SingleExercise[P] extends Exercise ?
        FormGroup<FormType<Exercise>> :
        FormType<SingleExercise>[P];
};

type SingleExerciseFormValueType = {
    [P in keyof Omit<ModelWithoutIdType<SingleExercise>, 'availableExercises'>]: SingleExercise[P];
};

@Component({
    selector: 'bl-single-exercise',
    templateUrl: './single-exercise.component.html',
    styleUrls: ['./single-exercise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        getControlValueAccessor(SingleExerciseComponent),
        UnsubscribeService,
    ],
})
export class SingleExerciseComponent implements ControlValueAccessor, OnDestroy {

    private readonly _invalidSetChanged$: Subject<void> = new Subject<void>();
    private readonly _exerciseNameChanged$: Subject<void> = new Subject<void>();
    private readonly _isSubmitted$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private readonly _isExercisePicker$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    readonly exercises$: Observable<Exercise[]> | undefined = undefined;
    readonly isSubmitted$: Observable<boolean> = this._isSubmitted$.asObservable();
    readonly exerciseNameChanged$: Observable<void> = this._exerciseNameChanged$.asObservable();
    readonly isExercisePicker$: Observable<boolean> = this._isExercisePicker$.asObservable();
    readonly currentTrainingDataState$: Observable<SingleExercise[]> = this._newTrainingStoreService.currentTrainingChanged$
        .pipe(
            map(currentTrainingState => currentTrainingState.exercises),
        );

    readonly isAddingExercisesAllowed$: Observable<boolean> = combineLatest([
        this._newTrainingStoreService.currentTrainingChanged$
            .pipe(
                map(currentTrainingState => currentTrainingState.exercises),
            ),
        this._newTrainingStoreService.allExercisesChanged$
            .pipe(
                map(value => value.Value),
            ),
        this._invalidSetChanged$
            .pipe(
                startWith(undefined as void),
            ),
    ])
    .pipe(
        delay(0),
        map(([trainingState, allExercises]) => {
            if (this.getExercises().length > 0) {
                if (this.setsCmpRef) {
                    return (trainingState.length <= allExercises.length) &&
                        ((this.accessFormGroup('exerciseData', 'name', this.getExercises().length - 1)?.value) && this.getExercises().length > 0) &&
                        this._areSetsValid(this.setsCmpRef);
                }
                return false;
            }
            else {
                return true;
            }
        }),
    );

    readonly form = new FormArray<FormGroup<SingleExerciseFormType>>([]);

    isExerciseChanged = false;
    isApiLoading = false;

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
    ) {
        this.form.setValidators([SingleExerciseValidators.checkDuplicateExerciseName(), SingleExerciseValidators.checkExerciseNumber()]);
        this.form.updateValueAndValidity();

        this._translateService.onLangChange
            .pipe(
                takeUntil(this._unsubscribeService),
            )
            .subscribe(_ => {
                this._isExercisePicker$.next(false);
                setTimeout(() => this._isExercisePicker$.next(true), 1);
            });
    }

    get currentWeightUnit(): WeightUnit {
        return this._preferencesStoreService.getPreferences().weightUnit ?? DEFAULT_WEIGHT_UNIT;
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

    ngOnDestroy(): void {
        this._invalidSetChanged$.complete();
        this._exerciseNameChanged$.complete();
        this._isSubmitted$.complete();
        this._isExercisePicker$.complete();
    }

    registerOnChange(fn: (formValue: SingleExerciseFormValueType[]) => void): void {
        this.form.valueChanges
            .pipe(
                takeUntil(this._unsubscribeService),
            ).subscribe(fn);
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    onExerciseNameChange(
        indexExercise: number,
        element: IonSelect,
    ): void {
        if (element?.value) {
            this._newTrainingStoreService.currentTrainingChanged$
                .pipe(
                    take(1),
                    switchMap((currentTrainingState: NewTraining) => {
                        const selectedExerciseData = currentTrainingState.exercises[indexExercise].availableExercises.find(exercise => exercise.name === element.value as string);
                        this.accessFormGroup('exerciseData', 'imageUrl', indexExercise).patchValue(selectedExerciseData.imageUrl);
                        this.accessFormGroup('exerciseData', 'primaryMuscleGroup', indexExercise).patchValue(selectedExerciseData.primaryMuscleGroup);
                        this.accessFormGroup('exerciseData', 'translations', indexExercise).patchValue(selectedExerciseData.translations);
                        return this._newTrainingStoreService.updateExerciseChoices(
                            element.value as string,
                            indexExercise,
                            currentTrainingState,
                            selectedExerciseData,
                        );
                    }),
                )
                .subscribe(_ => {
                    this.isExerciseChanged = !this.isExerciseChanged;
                    this._exerciseNameChanged$.next();
                    this._changeDetectorRef.markForCheck();
                });
        }
    }

    addExercise(exercise?: SingleExercise, event?: UIEvent): void {
        this.form.push(new FormGroup<SingleExerciseFormType>({
            exerciseData: new FormGroup<FormType<Exercise>>({
                name: new FormControl(exercise?.exerciseData?.name ?? '', [Validators.required]),
                imageUrl: new FormControl(exercise?.exerciseData?.imageUrl ?? ''),
                primaryMuscleGroup: new FormControl(exercise?.exerciseData?.primaryMuscleGroup ?? ''),
                translations: new FormControl<Translations>(exercise?.exerciseData?.translations),
            }),
            sets: new FormControl(exercise?.sets ?? [], { nonNullable: true }),
            total: new FormControl(exercise?.total, {
                    nonNullable: true,
                    validators: [Validators.required],
                }),
        }));

        if (event) {
            this._newTrainingStoreService.addNewExercise(this._getAlreadyUsedExercises())
                .pipe(
                    takeUntil(this._unsubscribeService),
                )
                .subscribe(_ => this.exerciseAdded.next(event));
        }
    }

    async deleteExercise(
        indexExercise: number,
        exerciseName: string,
    ): Promise<void> {
        if (exerciseName) {
            const modal = await this._modalController.create({
                component: DeleteExerciseDialogComponent,
                componentProps: {
                    isError: false,
                    deleteExercise: {
                        message$: this._translateService.stream('training.new_training.delete_exercise_prompt'),
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
                            return this._newTrainingStoreService.currentTrainingChanged$
                                .pipe(
                                    take(1),
                                    switchMap((currentTrainingState: NewTraining) =>
                                        this._newTrainingStoreService.deleteExercise(
                                            currentTrainingState,
                                            exerciseName,
                                        ),
                                    ),
                                    switchMap((data: [NewTraining, Exercise[]]) => {
                                        this.isExerciseChanged = !this.isExerciseChanged;
                                        this.form.removeAt(indexExercise);
                                        return this._newTrainingStoreService.pushToAvailableExercises(
                                            data[0],
                                            data[1],
                                        );
                                    }),
                                );
                        }
                        else {
                            return EMPTY;
                        }
                    }),
                    finalize(() => this._changeDetectorRef.markForCheck()),
                    takeUntil(this._unsubscribeService),
                )
                .subscribe();
        }
        else {
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
                .subscribe(_ => this.form.removeAt(indexExercise));
        }
    }

    onChangeSets($event: SetStateChanged): void {
        of(null)
            .pipe(
                switchMap(_ => {
                    if ($event?.isWeightLiftedValid &&
                        $event?.isRepsValid &&
                        this.accessFormGroup('exerciseData', 'name', $event.indexExercise).value) {
                            const trainingData: SetTrainingData = {
                                exerciseName: this.accessFormGroup('exerciseData', 'name', $event.indexExercise).value as string,
                                setNumber: $event.newSet.setNumber,
                                weightLifted: $event.newSet.weightLifted,
                                reps: $event.newSet.reps,
                                total: $event.newTotal,
                            };
                            return this._newTrainingStoreService.setsChanged(trainingData);
                    }
                    else {
                        this._invalidSetChanged$.next();
                        return of(null);
                    }
                }),
                takeUntil(this._unsubscribeService),
            ).subscribe(_ => this.accessFormField('total', $event.indexExercise).patchValue($event.newTotal));
    }

    deleteSet($event: Partial<SetStateChanged>): void {
        this.accessFormField('total', $event.indexExercise).patchValue($event.newTotal);
        this._newTrainingStoreService.deleteSet(
            $event.indexExercise,
            $event.indexSet,
            $event.newTotal,
        );
    }

    onWeightUnitChanged(exerciseIndex: number): void {
        this.accessFormField('total', exerciseIndex).patchValue(TOTAL_INITIAL_WEIGHT);
    }

    getExercises(): AbstractControl[] {
        return (this.form as UntypedFormArray).controls;
    }

    accessFormField(
        formField: keyof SingleExerciseFormControlType,
        indexExercise: number,
    ): AbstractControl {
        return this.form.at(indexExercise)?.get(formField);
    }

    accessFormGroup(
        formGroup: keyof SingleExerciseFormGroupType,
        formField: keyof FormControlExerciseData,
        indexExercise: number,
    ): AbstractControl {
        return this.form.at(indexExercise).get(formGroup)?.get(formField);
    }

    onSubmit(): void {
        this._isSubmitted$.next(true);
        const newTrainingFormValid = this.bodyweight.valid && this.trainingDate.valid;
        if (!this.form.valid || !this._areSetsValid(this.setsCmpRef) || !newTrainingFormValid) {
            return;
        }
        this.isApiLoading = true;

        this._gatherAllFormData()
            .pipe(
                switchMap((apiNewTraining: NewTraining) => {
                    if (this.editMode) {
                        return this._newTrainingService.updateTraining(
                            apiNewTraining,
                            this.editTrainingData?._id,
                        );
                    }
                    else {
                        return this._newTrainingService.addTraining(apiNewTraining);
                    }
                }),
                finalize(() => {
                    this.isApiLoading = false;
                    this._changeDetectorRef.markForCheck();
                }),
            ).subscribe(async (response: GeneralResponseData) => {
                await this._toastControllerService.displayToast({
                    message: this._translateService.instant(response.Message),
                    duration: MESSAGE_DURATION.GENERAL,
                    color: 'primary',
                });
            });
    }

    private _gatherAllFormData(): Observable<NewTraining> {
        return this._newTrainingStoreService.currentTrainingChanged$
            .pipe(
                take(1),
                map((currentTrainingState: NewTraining) => {
                    let exerciseFormData: SingleExercise[] = [];

                    this.getExercises().forEach((_exercise: AbstractControl, indexExercise: number) => {
                        const total = this.accessFormField('total', indexExercise).value as number;
                        const exerciseData: Exercise = {
                            name: this.accessFormGroup('exerciseData', 'name', indexExercise).value as string,
                            imageUrl: this.accessFormGroup('exerciseData', 'imageUrl', indexExercise).value as string,
                            primaryMuscleGroup: this.accessFormGroup('exerciseData', 'primaryMuscleGroup', indexExercise).value as string,
                            translations: this.accessFormGroup('exerciseData', 'translations', indexExercise).value as { hr: string; en: string },
                        };
                        const initialExercise = {
                            exerciseData,
                            sets: [],
                            total,
                            availableExercises: (currentTrainingState.exercises)[indexExercise]?.availableExercises || [],
                        } as SingleExercise;
                        exerciseFormData = [...exerciseFormData, initialExercise];

                        const formSetData: Set[] = [];
                        (this.accessFormField('sets', indexExercise).value as Set[]).forEach((set: Set) => {
                            const apiSet: Set = {
                                setNumber: +set.setNumber,
                                weightLifted: +set.weightLifted,
                                reps: +set.reps,
                            };
                            formSetData.push(apiSet);
                        });
                        exerciseFormData = [...exerciseFormData]
                            .map((exercise: SingleExercise, index: number) => {
                                if (index === indexExercise) {
                                    return {
                                        ...exercise,
                                        sets: formSetData,
                                    };
                                }
                                return exercise;
                            });
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
                alreadyUsedExercises.push(exercise.get('exerciseData.name').value as string);
            }
        }
        return alreadyUsedExercises;
    }

    private _areSetsValid(setsCmpRef: QueryList<SetsComponent>): boolean {
        let errors: string[] = [];
        setsCmpRef.forEach(setCmp => {
            const form = setCmp.form;
            if (form?.errors) {
                const mappedKeys: string[] = Object.keys(form.errors).map((key: string) => key as string);
                errors = errors.concat(mappedKeys);
            }
            form.controls.forEach((group: AbstractControl) => {
                if (group?.errors) {
                    const mappedKeys: string[] = Object.keys(group.errors).map((key: string) => key as string);
                    errors = errors.concat(mappedKeys);
                }
            });
        });
        return errors.length === 0;
    }

}
