import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonSelect } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { delay, map, switchMap, take, takeUntil, withLatestFrom } from 'rxjs/operators';
import { ExerciseDto as Exercise } from '../../../../../api/models/exercise-dto';
import { NewTrainingDto as NewTraining } from '../../../../../api/models/new-training-dto';
import { SelectedSetCategoriesChanged } from '../../../../models/training/new-training/single-exercise/set/set.model';
import { SetDto as Set } from '../../../../../api/models/set-dto';
import { SingleExerciseDto as SingleExercise } from '../../../../../api/models/single-exercise-dto';
import {
    ExerciseFormType,
    SingleExerciseFormType,
} from '../../../../models/training/new-training/single-exercise/single-exercise-form.type';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import * as SingleExerciseValidators from '../../../../validators/training/single-exercise.validators';
import { NewTrainingStoreService } from '../../../../services/store/training/new-training-store.service';
import { StreamData } from '../../../../models/common/common.model';
import {
    SetCategoryType,
    SetConstituentExistsType,
} from '../../../../models/training/new-training/single-exercise/set/set.type';
import { isNeverCheck } from '../../../../helpers/is-never-check.helper';
import { SetFormType } from '../../../../models/training/new-training/single-exercise/set/set-form.type';
import { TrainingsCommonFacadeService } from '../../../../store/trainings-common/trainings-common-facade.service';
import { SetsComponent } from './sets/sets.component';

@Component({
    selector: 'bl-single-exercise',
    templateUrl: './single-exercise.component.html',
    styleUrls: ['./single-exercise.component.scss'],
    providers: [UnsubscribeService],
})
export class SingleExerciseComponent implements OnDestroy {
    private _isExercisePicker$ = new BehaviorSubject<boolean>(true);

    isExercisePicker$ = this._isExercisePicker$.asObservable();
    exercisesState$ = this._newTrainingStoreService.trainingState$.pipe(
        map((currentTrainingState: NewTraining) => currentTrainingState.exercises),
    );
    isAddExerciseAllowed$ = this.exercisesState$.pipe(
        delay(0),
        withLatestFrom(this._trainingsCommonFacadeService.selectExercises()),
        map(([exerciseState, allExercises]: [SingleExercise[], StreamData<Exercise[]>]) => {
            if (exerciseState.length > 0) {
                if (this.setsCmpRef) {
                    return (
                        exerciseState.length <= allExercises.Value.length &&
                        this.form.controls[exerciseState.length - 1]?.controls.exerciseData
                            ?.controls.name?.value &&
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

    @Input()
    set restartExercises(exercises: SingleExercise[]) {
        if (exercises.length > 0) {
            while (this.form.length !== 0) {
                this.form.removeAt(0);
            }
            for (const exercise of exercises) {
                this.addExercise(exercise);
            }
        }

        this.form.setValidators([SingleExerciseValidators.checkDuplicateExerciseName()]);
        this.form.updateValueAndValidity();
    }

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
        private _trainingsCommonFacadeService: TrainingsCommonFacadeService,
        private _newTrainingStoreService: NewTrainingStoreService,
        private _unsubscribeService: UnsubscribeService,
        private _translateService: TranslateService,
    ) {
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

    onSelectedSetCategoriesChanged(
        data: SelectedSetCategoriesChanged,
        exerciseIndex: number,
    ): void {
        const selectedSetCategoriesValue =
            this.form.controls[exerciseIndex].controls.exerciseData.controls.selectedSetCategories
                .value;
        switch (data.setChangedType) {
            case 'addSet': {
                this.form.controls[
                    exerciseIndex
                ].controls.exerciseData.controls.selectedSetCategories.patchValue(
                    [...selectedSetCategoriesValue, data.setCategory],
                    { emitEvent: false },
                );
                break;
            }
            case 'updateSet': {
                this.form.controls[
                    exerciseIndex
                ].controls.exerciseData.controls.selectedSetCategories.patchValue(
                    [...selectedSetCategoriesValue].map((category: SetCategoryType, i: number) => {
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
            case 'deleteSet': {
                this.form.controls[
                    exerciseIndex
                ].controls.exerciseData.controls.selectedSetCategories.patchValue(
                    selectedSetCategoriesValue.filter(
                        (_category: SetCategoryType, i: number) => i !== data.setIndex,
                    ),
                    { emitEvent: false },
                );
                break;
            }
            default: {
                isNeverCheck(data.setChangedType);
            }
        }
    }

    onExerciseNameChange(indexExercise: number, selectedExercise: Exercise): void {
        if (selectedExercise?.name) {
            this._newTrainingStoreService.trainingState$
                .pipe(
                    take(1),
                    switchMap((currentTrainingState: NewTraining) => {
                        const selectedExerciseData = currentTrainingState.exercises[
                            indexExercise
                        ].availableExercises.find(
                            (exercise: Exercise) => exercise.name === selectedExercise.name,
                        );
                        return this._newTrainingStoreService
                            .updateExerciseName(
                                selectedExercise.name,
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
                    ].controls.exerciseData.controls.name.patchValue(selectedExerciseData.name);
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
                    this.form.controls[
                        indexExercise
                    ].controls.exerciseData.controls.translations.patchValue(
                        selectedExercise.translations,
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
                    const { weight, reps, duration } = this._prepareSet(
                        exercise.exerciseData.selectedSetCategories[index],
                    );
                    if (!weight) {
                        delete set.weight;
                    }
                    if (!reps) {
                        delete set.reps;
                    }
                    if (!duration) {
                        delete set.duration;
                    }
                    return set;
                }),
            };
        }
        this.form.push(
            new FormGroup<SingleExerciseFormType>({
                exerciseData: new FormGroup<ExerciseFormType>({
                    _id: new FormControl(exercise?.exerciseData?._id),
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
                    translations: new FormControl(exercise?.exerciseData?.translations),
                }),
            }),
        );
        if (event) {
            this._newTrainingStoreService
                .addNewExercise(this._getAlreadyUsedExercises())
                .pipe(takeUntil(this._unsubscribeService))
                .subscribe((_) => this.exerciseAdded.next(event));
        }
    }

    deleteExercise(indexExercise: number, exerciseName: string): void {
        this._newTrainingStoreService.trainingState$
            .pipe(
                take(1),
                switchMap((currentTrainingState: NewTraining) =>
                    this._newTrainingStoreService.deleteExercise(
                        currentTrainingState,
                        exerciseName,
                        exerciseName ? undefined : indexExercise,
                    ),
                ),
                switchMap((data: [NewTraining, Exercise[]]) => {
                    this.form.removeAt(indexExercise);
                    if (exerciseName) {
                        return this._newTrainingStoreService.pushToAvailableExercises(
                            data[0],
                            data[1],
                        );
                    }
                    return EMPTY;
                }),
            )
            .subscribe();
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
            form.controls.forEach((group: FormGroup<SetFormType>) => {
                if (group?.errors) {
                    isFormValid = false;
                }
                const weightErrors = group.controls.weight?.errors;
                const repsErrors = group.controls.reps?.errors;
                const durationErrors = group.controls.duration?.errors;
                if (weightErrors || repsErrors || durationErrors) {
                    isFormValid = false;
                }
            });
        });
        return isFormValid;
    }

    private _getAlreadyUsedExercises(): string[] {
        const alreadyUsedExercises: string[] = [];
        for (const exercise of this.getExercises()) {
            if (exercise.controls.exerciseData.controls.name.value) {
                alreadyUsedExercises.push(exercise.controls.exerciseData.controls.name.value);
            }
        }
        return alreadyUsedExercises;
    }

    private _prepareSet(setCategory: SetCategoryType): SetConstituentExistsType {
        let weight: boolean;
        let reps: boolean;
        let duration: boolean;
        switch (setCategory) {
            case 'freeWeighted':
            case 'dynamicWeighted': {
                weight = true;
                reps = true;
                duration = false;
                break;
            }
            case 'dynamicBodyweight': {
                weight = false;
                reps = true;
                duration = false;
                break;
            }
            case 'staticBodyweight': {
                weight = false;
                reps = false;
                duration = true;
                break;
            }
            case 'staticWeighted': {
                weight = true;
                reps = false;
                duration = true;
                break;
            }
            default: {
                isNeverCheck(setCategory);
            }
        }
        return {
            weight,
            reps,
            duration,
        };
    }
}
