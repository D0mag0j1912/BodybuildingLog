import {
    ChangeDetectionStrategy,
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
import { IonSelect } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { delay, map, switchMap, take, takeUntil, withLatestFrom } from 'rxjs/operators';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { DEFAULT_WEIGHT_UNIT } from '../../../../constants/shared/default-weight-format.const';
import { Exercise } from '../../../../models/training/exercise.model';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { SelectedCategoriesChanged, Set } from '../../../../models/training/shared/set/set.model';
import { SingleExercise } from '../../../../models/training/shared/single-exercise/single-exercise.model';
import {
    ExerciseFormType,
    SingleExerciseFormType,
    SingleExerciseValueType,
} from '../../../../models/training/shared/single-exercise/single-exercise-form.type';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import * as SingleExerciseValidators from '../../../../validators/training/single-exercise.validators';
import { NewTrainingStoreService } from '../../../../services/store/training/new-training-store.service';
import { SetsComponent } from '../set/set.component';
import { PreferencesStoreService } from '../../../../services/store/shared/preferences-store.service';
import { WeightUnit } from '../../../../models/common/preferences.type';
import { StreamData } from '../../../../models/common/common.model';
import {
    SetCategoryType,
    SetConstituentExistsType,
} from '../../../../models/training/shared/set/set.type';
import { isNeverCheck } from '../../../../helpers/is-never-check.helper';
import { ExercisesStoreService } from '../../../../services/store/training/exercises-store.service';

@Component({
    selector: 'bl-single-exercise',
    templateUrl: './single-exercise.component.html',
    styleUrls: ['./single-exercise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [getControlValueAccessor(SingleExerciseComponent), UnsubscribeService],
})
export class SingleExerciseComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private _isExercisePicker$ = new BehaviorSubject<boolean>(true);

    isExercisePicker$ = this._isExercisePicker$.asObservable();
    exercisesState$ = this._newTrainingStoreService.trainingState$.pipe(
        map((currentTrainingState: NewTraining) => currentTrainingState.exercises),
    );
    isAddExerciseAllowed$ = this.exercisesState$.pipe(
        delay(0),
        withLatestFrom(this._exercisesStoreService.allExercisesState$),
        map(([exerciseState, allExercises]: [SingleExercise[], StreamData<Exercise[]>]) => {
            if (exerciseState.length > 0) {
                if (this.setsCmpRef) {
                    return (
                        exerciseState.length <= allExercises.Value.length &&
                        this.form.controls[exerciseState.length - 1].controls.exerciseData?.controls
                            .name?.value &&
                        exerciseState.length > 0 &&
                        this.areSetsValid()
                    );
                }
                return false;
            } else {
                return true;
            }
        }),
    );

    form = new FormArray<FormGroup<SingleExerciseFormType>>([]);

    onTouched: () => void;

    @Input()
    editTrainingData: NewTraining;

    @Input()
    bodyweightControl: FormControl<number>;

    @Input()
    trainingDate: AbstractControl<string> | null;

    @Input()
    isSubmitted = false;

    @Input()
    isLoading = false;

    @Input()
    isApiLoading = false;

    @Input()
    editMode = false;

    @Output()
    exerciseAdded: EventEmitter<UIEvent> = new EventEmitter();

    @ViewChildren('exercisePicker')
    exercisePickerEls: QueryList<IonSelect>;

    @ViewChildren(SetsComponent)
    setsCmpRef: QueryList<SetsComponent>;

    constructor(
        private _newTrainingStoreService: NewTrainingStoreService,
        private _unsubscribeService: UnsubscribeService,
        private _preferencesStoreService: PreferencesStoreService,
        private _exercisesStoreService: ExercisesStoreService,
        private _translateService: TranslateService,
    ) {}

    get currentWeightUnit(): WeightUnit {
        return this._preferencesStoreService.getPreferences().weightUnit ?? DEFAULT_WEIGHT_UNIT;
    }

    ngOnInit(): void {
        this.form.setValidators([SingleExerciseValidators.checkDuplicateExerciseName()]);
        this.form.updateValueAndValidity();

        this._translateService.onLangChange
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((_) => {
                this._isExercisePicker$.next(false);
                setTimeout(() => this._isExercisePicker$.next(true), 1);
            });
    }

    ngOnDestroy(): void {
        this._isExercisePicker$.complete();
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

    onSelectedCategoriesChanged(data: SelectedCategoriesChanged, exerciseIndex: number): void {
        switch (data.setChangedType) {
            case 'addSet': {
                this.form.controls[
                    exerciseIndex
                ].controls.exerciseData.controls.selectedSetCategories.patchValue(
                    [
                        ...this.form.controls[exerciseIndex].controls.exerciseData.controls
                            .selectedSetCategories.value,
                        data.setCategory,
                    ],
                    { emitEvent: false },
                );
                break;
            }
            case 'updateSet': {
                this.form.controls[
                    exerciseIndex
                ].controls.exerciseData.controls.selectedSetCategories.patchValue(
                    [
                        ...this.form.controls[exerciseIndex].controls.exerciseData.controls
                            .selectedSetCategories.value,
                    ].map((category: SetCategoryType, i: number) => {
                        if (i === data.setIndex) {
                            category = data.setCategory;
                            return category;
                        }
                        return category;
                    }),
                    { emitEvent: false },
                );
                break;
            }
        }
    }

    onExerciseNameChange(indexExercise: number, element: IonSelect): void {
        if (element?.value) {
            this._newTrainingStoreService.trainingState$
                .pipe(
                    take(1),
                    switchMap((currentTrainingState: NewTraining) => {
                        const selectedExerciseData = currentTrainingState.exercises[
                            indexExercise
                        ].availableExercises.find(
                            (exercise: Exercise) => exercise.name === (element.value as string),
                        );
                        return this._newTrainingStoreService
                            .updateExerciseChoices(
                                element.value as string,
                                indexExercise,
                                currentTrainingState,
                                selectedExerciseData,
                            )
                            .pipe(map((_) => selectedExerciseData));
                    }),
                )
                .subscribe((selectedExerciseData: Exercise) => {
                    this.form.controls[
                        indexExercise
                    ].controls.exerciseData.controls.imageUrl.patchValue(
                        selectedExerciseData.imageUrl,
                    );
                    this.form.controls[
                        indexExercise
                    ].controls.exerciseData.controls.primaryMuscleGroup.patchValue(
                        selectedExerciseData.primaryMuscleGroup,
                    );
                    this.form.controls[
                        indexExercise
                    ].controls.exerciseData.controls.availableSetCategories.patchValue(
                        selectedExerciseData.availableSetCategories,
                    );
                    this.form.controls[
                        indexExercise
                    ].controls.exerciseData.controls.selectedSetCategories.patchValue(
                        selectedExerciseData.selectedSetCategories,
                    );
                    if (this.bodyweightControl?.errors) {
                        this.bodyweightControl.markAsTouched();
                    }
                });
        }
    }

    addExercise(exercise?: SingleExercise, event?: UIEvent): void {
        if (exercise) {
            exercise = {
                ...exercise,
                sets: [...exercise.sets].map((set: Set, index: number) => {
                    const { weightLifted, reps } = this._prepareSet(
                        exercise.exerciseData.selectedSetCategories[index],
                    );
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
                    availableSetCategories: new FormControl(
                        exercise?.exerciseData?.availableSetCategories ?? [],
                    ),
                    selectedSetCategories: new FormControl(
                        exercise?.exerciseData?.selectedSetCategories ?? [],
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
            this._newTrainingStoreService.trainingState$
                .pipe(
                    take(1),
                    switchMap((currentTrainingState: NewTraining) =>
                        this._newTrainingStoreService.deleteExercise(
                            currentTrainingState,
                            exerciseName,
                        ),
                    ),
                    switchMap((data: [NewTraining, Exercise[]]) => {
                        this.form.removeAt(indexExercise);
                        return this._newTrainingStoreService.pushToAvailableExercises(
                            data[0],
                            data[1],
                        );
                    }),
                )
                .subscribe();
        } else {
            this._newTrainingStoreService.trainingState$
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

    areSetsValid(): boolean {
        let isFormValid = true;
        this.setsCmpRef.forEach((setCmp: SetsComponent) => {
            const form = setCmp.form;
            if (form?.errors) {
                isFormValid = false;
            }
            form.controls.forEach((group: AbstractControl) => {
                if (group?.errors) {
                    isFormValid = false;
                }
                const weightLiftedErrors = group.get('weightLifted')?.errors;
                const repsErrors = group.get('reps')?.errors;
                if (weightLiftedErrors) {
                    isFormValid = false;
                }
                if (repsErrors) {
                    isFormValid = false;
                }
            });
        });
        return isFormValid;
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

    private _prepareSet(setCategory: SetCategoryType): SetConstituentExistsType {
        let weightLifted: boolean;
        let reps: boolean;
        switch (setCategory) {
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
                isNeverCheck(setCategory);
            }
        }
        return {
            weightLifted,
            reps,
        };
    }
}
