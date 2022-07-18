import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
import { EditNewTrainingData } from '../../../../models/training/new-training/edit-training.model';
import { Training } from '../../../../models/training/new-training/training.model';
import { SetStateChanged, SetTrainingData } from '../../../../models/training/shared/set.model';
import { Set } from '../../../../models/training/shared/set.model';
import { SingleExercise } from '../../../../models/training/shared/single-exercise.model';
import { FormControlExerciseData, FormControlSingleExercise, FormGroupExerciseData } from '../../../../models/training/shared/single-exercise.type';
import { RoundTotalWeightPipe } from '../../../../pipes/training/new-training/round-total-weight/round-total-weight.pipe';
import { ToastControllerService } from '../../../../services/shared/toast-controller.service';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { TrainingService } from '../../../../services/api/training/training.service';
import * as SingleExerciseValidators from '../../../../validators/training/single-exercise.validators';
import { DeleteExerciseDialogData, DeleteExerciseDialogComponent, DialogData } from '../../delete-exercise-dialog/delete-exercise-dialog.component';
import { DialogRoles } from '../../../../constants/enums/model-roles.enum';
import { TrainingStoreService } from '../../../../services/store/training/training-store.service';
import { EMPTY_TRAINING_EDIT, TOTAL_INITIAL_WEIGHT } from '../../../../constants/training/new-training.const';
import { createInitialSet } from '../../../../constants/shared/create-initial-set.const';
import { SetsComponent } from '../sets/sets.component';
import { PreferencesStoreService } from '../../../../services/store/shared/preferences-store.service';
import { WeightUnit } from '../../../../models/common/preferences.type';

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

    private readonly _invalidSetChanged$$: Subject<void> = new Subject<void>();
    private readonly _exerciseNameChanged$$: Subject<void> = new Subject<void>();
    private readonly _isSubmitted$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    readonly exercises$: Observable<Exercise[]> | undefined = undefined;
    readonly isSubmitted$: Observable<boolean> = this._isSubmitted$$.asObservable();
    readonly exerciseNameChanged$: Observable<void> = this._exerciseNameChanged$$.asObservable();
    readonly currentTrainingDataState$: Observable<SingleExercise[]> = this.trainingStoreService.currentTrainingChanged$
        .pipe(
            map(currentTrainingState => currentTrainingState.exercises),
        );

    readonly isAddingExercisesAllowed$: Observable<boolean> = combineLatest([
        this.trainingStoreService.currentTrainingChanged$
            .pipe(
                map(currentTrainingState => currentTrainingState.exercises),
            ),
        this.trainingStoreService.allExercisesChanged$
            .pipe(
                map(value => value.Value),
            ),
        this._invalidSetChanged$$
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
                        this.areSetsValid(this.setsCmpRef);
                }
                return false;
            }
            else {
                return true;
            }
        }),
    );

    readonly form: FormArray = new FormArray([]);

    exerciseChanged = false;
    isApiLoading = false;
    showSelects = true;

    onTouched: () => void;

    @Input()
    editData: EditNewTrainingData = EMPTY_TRAINING_EDIT;

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
        private readonly trainingStoreService: TrainingStoreService,
        private readonly trainingService: TrainingService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly preferencesStoreService: PreferencesStoreService,
        private readonly translateService: TranslateService,
        private readonly toastControllerService: ToastControllerService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly modalController: ModalController,
        private readonly roundTotalWeightPipe: RoundTotalWeightPipe,
    ) {
        this.form.setValidators([SingleExerciseValidators.checkDuplicateExerciseName(), SingleExerciseValidators.checkExerciseNumber()]);
        this.form.updateValueAndValidity();

        this.translateService.onLangChange
            .pipe(
                takeUntil(this.unsubscribeService),
            )
            .subscribe(_ => {
                this.showSelects = false;
                setTimeout(() => {
                    this.showSelects = true;
                    this.changeDetectorRef.markForCheck();
                }, 1);
            });
    }

    get currentWeightUnit(): WeightUnit {
        return this.preferencesStoreService.getPreferences().weightFormat ?? DEFAULT_WEIGHT_UNIT;
    }

    writeValue(exercises: SingleExercise[]): void {
        if (exercises && exercises?.length > 0) {
            while (this.form.length !== 0) {
                this.form.removeAt(0);
            }
            exercises.forEach((exercise: SingleExercise, indexExercise: number) => {
                this.addExercise();
                if (exercise?.exerciseData?.name) {
                    this.accessFormGroup('exerciseData', 'name', indexExercise).patchValue(exercise.exerciseData.name);
                    this.accessFormGroup('exerciseData', 'imageUrl', indexExercise).patchValue(exercise.exerciseData.imageUrl);
                    this.accessFormGroup('exerciseData', 'primaryMuscleGroup', indexExercise).patchValue(exercise.exerciseData.primaryMuscleGroup);
                    this.accessFormGroup('exerciseData', 'translations', indexExercise).patchValue(exercise.exerciseData.translations);
                    this.accessFormField('sets', indexExercise).patchValue(exercise.sets);
                    this.accessFormField('total', indexExercise).patchValue(exercise?.total ? this.roundTotalWeightPipe.transform(exercise.total, this.currentWeightUnit) : `0 ${DEFAULT_WEIGHT_UNIT}`);
                }
            });
        }
    }

    ngOnDestroy(): void {
        this._invalidSetChanged$$.complete();
        this._exerciseNameChanged$$.complete();
        this._isSubmitted$$.complete();
    }

    registerOnChange(fn: (formValue: Partial<SingleExercise[]>) => void): void {
        this.form.valueChanges
            .pipe(
                takeUntil(this.unsubscribeService),
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
            const currentTraining = { ...this.trainingStoreService.getCurrentTrainingState() };
            const selectedExerciseData = currentTraining.exercises[indexExercise].availableExercises.find(exercise => exercise.name === element.value as string);
            this.accessFormGroup('exerciseData', 'imageUrl', indexExercise).patchValue(selectedExerciseData.imageUrl);
            this.accessFormGroup('exerciseData', 'primaryMuscleGroup', indexExercise).patchValue(selectedExerciseData.primaryMuscleGroup);
            this.accessFormGroup('exerciseData', 'translations', indexExercise).patchValue(selectedExerciseData.translations);
            this.trainingStoreService.updateExerciseChoices(
                element.value as string,
                indexExercise,
                currentTraining,
                selectedExerciseData,
            ).pipe(
                takeUntil(this.unsubscribeService),
            ).subscribe(_ => {
                this.exerciseChanged = !this.exerciseChanged;
                this._exerciseNameChanged$$.next();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    addExercise(event?: UIEvent): void {
        this.form.push(new FormGroup({
            exerciseData: new FormGroup({
                name: new FormControl(null, [Validators.required]),
                imageUrl: new FormControl(null),
                primaryMuscleGroup: new FormControl(null),
                translations: new FormControl(null),
            }),
            sets: new FormControl(createInitialSet()),
            total: new FormControl(this.roundTotalWeightPipe.transform(TOTAL_INITIAL_WEIGHT, this.currentWeightUnit), [Validators.required]),
        }));

        if (event) {
            this.trainingStoreService.addNewExercise(this.getAlreadyUsedExercises())
                .pipe(
                    takeUntil(this.unsubscribeService),
                )
                .subscribe(_ => this.exerciseAdded.next(event));
        }
    }

    async deleteExercise(
        indexExercise: number,
        exerciseName: string,
    ): Promise<void> {
        if (exerciseName) {
            const modal = await this.modalController.create({
                component: DeleteExerciseDialogComponent,
                componentProps: {
                    isError: false,
                    deleteExercise: {
                        message$: this.translateService.stream('training.new_training.delete_exercise_prompt'),
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
                            return this.trainingStoreService.currentTrainingChanged$
                                .pipe(
                                    take(1),
                                    switchMap((currentTrainingState: Training) =>
                                        this.trainingStoreService.deleteExercise(
                                            currentTrainingState,
                                            exerciseName,
                                        ),
                                    ),
                                    switchMap((data: [Training, Exercise[]]) => {
                                        this.exerciseChanged = !this.exerciseChanged;
                                        this.form.removeAt(indexExercise);
                                        return this.trainingStoreService.pushToAvailableExercises(
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
                    finalize(() => this.changeDetectorRef.markForCheck()),
                    takeUntil(this.unsubscribeService),
                )
                .subscribe();
        }
        else {
            this.trainingStoreService.currentTrainingChanged$
                .pipe(
                    take(1),
                    switchMap((currentTrainingState: Training) =>
                        this.trainingStoreService.deleteExercise(
                            currentTrainingState,
                            null,
                            indexExercise,
                        ),
                    ),
                    takeUntil(this.unsubscribeService),
                )
                .subscribe(_ => this.form.removeAt(indexExercise));
        }
    }

    onChangeSets($event: SetStateChanged): void {
        let isExerciseValid = false;
        of(null)
            .pipe(
                switchMap(_ => {
                    if ($event?.isWeightLiftedValid &&
                        $event?.isRepsValid &&
                        this.accessFormGroup('exerciseData', 'name', $event.indexExercise).value) {
                            isExerciseValid = true;
                            const trainingData: SetTrainingData = {
                                exerciseName: this.accessFormGroup('exerciseData', 'name', $event.indexExercise).value as string,
                                setNumber: $event.newSet.setNumber,
                                weightLifted: $event.newSet.weightLifted,
                                reps: $event.newSet.reps,
                                total: $event.newTotal,
                            };
                            return this.trainingStoreService.setsChanged(trainingData);
                    }
                    else {
                        isExerciseValid = false;
                        this._invalidSetChanged$$.next();
                        return of(null);
                    }
                }),
                takeUntil(this.unsubscribeService),
            ).subscribe(_ => this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform(isExerciseValid ? $event.newTotal : 0, this.currentWeightUnit)));
    }

    deleteSet($event: Partial<SetStateChanged>): void {
        this.accessFormField('total', $event.indexExercise).patchValue(this.roundTotalWeightPipe.transform($event.newTotal, this.currentWeightUnit));
        this.trainingStoreService.deleteSet(
            $event.indexExercise,
            $event.indexSet,
            $event.newTotal,
        );
    }

    getExercises(): AbstractControl[] {
        return (this.form as FormArray).controls;
    }

    accessFormField(
        formField: keyof FormControlSingleExercise,
        indexExercise: number,
    ): AbstractControl {
        return this.form.at(indexExercise)?.get(formField);
    }

    accessFormGroup(
        formGroup: keyof FormGroupExerciseData,
        formField: keyof FormControlExerciseData,
        indexExercise: number,
    ): AbstractControl {
        return this.form.at(indexExercise).get(formGroup)?.get(formField);
    }

    onSubmit(): void {
        this._isSubmitted$$.next(true);
        if (!this.form.valid || !this.areSetsValid(this.setsCmpRef)) {
            return;
        }
        this.isApiLoading = true;

        this.gatherAllFormData()
            .pipe(
                switchMap((apiNewTraining: Training) => {
                    if (this.editMode) {
                        return this.trainingService.updateTraining(
                            apiNewTraining,
                            this.editData.editTraining?._id,
                        );
                    }
                    else {
                        return this.trainingService.addTraining(apiNewTraining);
                    }
                }),
                finalize(() => {
                    this.isApiLoading = false;
                    this.changeDetectorRef.markForCheck();
                }),
            ).subscribe(async (response: GeneralResponseData) => {
                await this.toastControllerService.displayToast({
                    message: this.translateService.instant(response.Message),
                    duration: MESSAGE_DURATION.GENERAL,
                    color: 'primary',
                });
            });
    }

    private gatherAllFormData(): Observable<Training> {
        return this.trainingStoreService.currentTrainingChanged$
            .pipe(
                take(1),
                map((currentTrainingState: Training) => {
                    const exerciseFormData: SingleExercise[] = [];

                    this.getExercises().forEach((_exercise: AbstractControl, indexExercise: number) => {
                        const splittedTotal: string[] = (this.accessFormField('total', indexExercise).value as string).split(' ');
                        const exerciseData: Exercise = {
                            name: this.accessFormGroup('exerciseData', 'name', indexExercise).value as string,
                            imageUrl: this.accessFormGroup('exerciseData', 'imageUrl', indexExercise).value as string,
                            primaryMuscleGroup: this.accessFormGroup('exerciseData', 'primaryMuscleGroup', indexExercise).value as string,
                            translations: this.accessFormGroup('exerciseData', 'translations', indexExercise).value as { hr: string; en: string },
                        };
                        exerciseFormData.push({
                            exerciseData,
                            sets: [],
                            total: +splittedTotal[0],
                            availableExercises: (currentTrainingState.exercises)[indexExercise]?.availableExercises || [],
                        });

                        const formSetData: Set[] = [];
                        (this.accessFormField('sets', indexExercise).value as Set[]).forEach((set: Set) => {
                            const apiSet: Set = {
                                setNumber: +set.setNumber,
                                weightLifted: +set.weightLifted,
                                reps: +set.reps,
                            };
                            formSetData.push(apiSet);
                        });
                        exerciseFormData[indexExercise].sets = formSetData;
                    });

                    return {
                        exercises: exerciseFormData,
                        bodyweight: this.bodyweight.value ? +this.bodyweight.value : null,
                        trainingDate: new Date(this.trainingDate.value) ?? new Date(),
                        editMode: this.editMode,
                        userId: currentTrainingState.userId,
                    } as Training;
                }),
            );
    }

    private getAlreadyUsedExercises(): string[] {
        const alreadyUsedExercises: string[] = [];
        for (const exercise of this.getExercises()) {
            if (exercise.get('exerciseData.name').value) {
                alreadyUsedExercises.push(exercise.get('exerciseData.name').value as string);
            }
        }
        return alreadyUsedExercises;
    }

    private areSetsValid(setsCmpRef: QueryList<SetsComponent>): boolean {
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
