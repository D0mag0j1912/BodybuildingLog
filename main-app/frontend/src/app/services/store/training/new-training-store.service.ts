import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { take, tap, map, switchMap, concatMap, withLatestFrom } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { StreamData } from '../../../models/common/common.model';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';
import {
    createEmptyExercise,
    EMPTY_TRAINING,
    TOTAL_INITIAL_WEIGHT,
} from '../../../constants/training/new-training.const';
import { NewTrainingDto as NewTraining } from '../../../../api/models/new-training-dto';
import { SetDto as Set } from '../../../../api/models/set-dto';
import { SingleExerciseDto as SingleExercise } from '../../../../api/models/single-exercise-dto';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import {
    SetCategoryType,
    SetTrainingData,
} from '../../../models/training/new-training/single-exercise/set/set.type';
import { isNeverCheck } from '../../../helpers/is-never-check.helper';
import { PreferenceChangedType } from '../../../models/common/preferences.type';
import { PreferencesStoreService } from '../shared/preferences-store.service';
import { PreferencesDto as Preferences } from '../../../../api/models/preferences-dto';
import { DEFAULT_WEIGHT_UNIT } from '../../../constants/shared/default-weight-unit.const';
import { NewTrainingPreferencesDto as NewTrainingPreferences } from '../../../../api/models/new-training-preferences-dto';
import { UpdateTrainingStateType } from '../../../models/training/new-training/update-training-state.type';
import { ExercisesStoreService } from './exercises-store.service';

@Injectable({ providedIn: 'root' })
export class NewTrainingStoreService {
    private _trainingState$ = new BehaviorSubject<NewTraining>(EMPTY_TRAINING);
    trainingState$ = this._trainingState$.asObservable();

    constructor(
        private _exercisesStoreService: ExercisesStoreService,
        private _preferencesStoreService: PreferencesStoreService,
    ) {}

    getCurrentTrainingState(): NewTraining {
        return { ...this._trainingState$.getValue() };
    }

    updateNewTrainingPreferences(
        preferenceChangedType: PreferenceChangedType,
        newTrainingPreferences: NewTrainingPreferences,
    ): Observable<void> {
        return this._trainingState$.pipe(
            take(1),
            switchMap((trainingState: NewTraining) => {
                let updatedTraining: NewTraining;
                if (preferenceChangedType === 'weightUnit') {
                    updatedTraining = {
                        ...trainingState,
                        preferences: {
                            weightUnit: newTrainingPreferences.weightUnit,
                            setDurationUnit: trainingState.preferences.setDurationUnit,
                        },
                    };
                } else if (preferenceChangedType === 'setDurationUnit') {
                    updatedTraining = {
                        ...trainingState,
                        preferences: {
                            weightUnit: trainingState.preferences.weightUnit,
                            setDurationUnit: newTrainingPreferences.setDurationUnit,
                        },
                    };
                }
                return this._saveTrainingData(updatedTraining);
            }),
        );
    }

    updateTrainingDate(trainingDate: string): Observable<void> {
        return this._trainingState$.pipe(
            take(1),
            switchMap((trainingState: NewTraining) => {
                const updatedTraining = {
                    ...trainingState,
                    trainingDate,
                };
                return this._saveTrainingData(updatedTraining);
            }),
        );
    }

    updateBodyweight(bodyweight: number): Observable<void> {
        return this._trainingState$.pipe(
            take(1),
            map((trainingState: NewTraining) => {
                const updatedTraining: NewTraining = {
                    ...trainingState,
                    bodyweight,
                    exercises: [...trainingState.exercises].map((exercise: SingleExercise) => {
                        let total = 0;
                        exercise.sets.forEach((set: Set, index: number) => {
                            const setCategory = exercise.exerciseData.selectedSetCategories[index];
                            switch (setCategory) {
                                case 'freeWeighted': {
                                    total = total + set.weight * set.reps;
                                    break;
                                }
                                case 'dynamicBodyweight': {
                                    total = total + set.reps * bodyweight;
                                    break;
                                }
                                case 'dynamicWeighted': {
                                    total = total + (bodyweight + set.weight) * set.reps;
                                    break;
                                }
                                case 'staticBodyweight': {
                                    total += bodyweight + set.duration;
                                    break;
                                }
                                case 'staticWeighted': {
                                    total += bodyweight + set.weight + set.duration;
                                    break;
                                }
                                default: {
                                    isNeverCheck(setCategory);
                                }
                            }
                        });
                        return {
                            ...exercise,
                            total,
                        };
                    }),
                };
                return updatedTraining;
            }),
            switchMap((updatedTraining: NewTraining) => this._saveTrainingData(updatedTraining)),
        );
    }

    updatePrimarySetCategory(
        indexExercise: number,
        indexSet: number,
        setCategory: SetCategoryType,
    ): Observable<void> {
        return this._trainingState$.pipe(
            take(1),
            map((trainingState: NewTraining) => {
                let updatedSet: Set;
                switch (setCategory) {
                    case 'freeWeighted':
                    case 'dynamicWeighted': {
                        updatedSet = { setNumber: indexSet + 1, weight: null, reps: null };
                        break;
                    }
                    case 'dynamicBodyweight': {
                        updatedSet = { setNumber: indexSet + 1, reps: null };
                        break;
                    }
                    case 'staticBodyweight': {
                        updatedSet = {
                            setNumber: indexSet + 1,
                            duration: null,
                        };
                        break;
                    }
                    case 'staticWeighted': {
                        updatedSet = {
                            setNumber: indexSet + 1,
                            weight: null,
                            duration: null,
                        };
                        break;
                    }
                    default: {
                        isNeverCheck(setCategory);
                    }
                }
                const updatedTraining: NewTraining = {
                    ...trainingState,
                    exercises: [...trainingState.exercises].map(
                        (exercise: SingleExercise, i: number) => {
                            if (indexExercise === i) {
                                return {
                                    ...exercise,
                                    exerciseData: {
                                        ...exercise.exerciseData,
                                        selectedSetCategories: [
                                            ...exercise.exerciseData.selectedSetCategories,
                                        ].map((category: SetCategoryType, j: number) => {
                                            if (indexSet === j) {
                                                return setCategory;
                                            }
                                            return category;
                                        }),
                                    },
                                    sets: [...exercise.sets].map((set: Set, k: number) => {
                                        if (indexSet === k) {
                                            return updatedSet;
                                        }
                                        return set;
                                    }),
                                };
                            }
                            return exercise;
                        },
                    ),
                };
                return updatedTraining;
            }),
            concatMap((updatedTraining: NewTraining) => this._saveTrainingData(updatedTraining)),
        );
    }

    addSet(
        indexExercise: number,
        setCategory: SetCategoryType,
        setNumber: number,
    ): Observable<SetCategoryType> {
        return this._trainingState$.pipe(
            take(1),
            map((trainingState: NewTraining) => {
                const updatedTraining = {
                    ...trainingState,
                    exercises: [...trainingState.exercises].map(
                        (exercise: SingleExercise, i: number) => {
                            if (i === indexExercise) {
                                let set: Set;
                                switch (setCategory) {
                                    case 'freeWeighted':
                                    case 'dynamicWeighted': {
                                        set = { setNumber, weight: null, reps: null };
                                        break;
                                    }
                                    case 'dynamicBodyweight': {
                                        set = { setNumber, reps: null };
                                        break;
                                    }
                                    case 'staticBodyweight': {
                                        set = {
                                            setNumber,
                                            duration: null,
                                        };
                                        break;
                                    }
                                    case 'staticWeighted': {
                                        set = {
                                            setNumber,
                                            weight: null,
                                            duration: null,
                                        };
                                        break;
                                    }
                                    default: {
                                        isNeverCheck(setCategory);
                                    }
                                }
                                return {
                                    ...exercise,
                                    sets: [...exercise.sets, set],
                                    exerciseData: {
                                        ...exercise.exerciseData,
                                        selectedSetCategories: [
                                            ...exercise.exerciseData.selectedSetCategories,
                                            setCategory,
                                        ],
                                    },
                                };
                            }
                            return exercise;
                        },
                    ),
                };
                return updatedTraining;
            }),
            concatMap((updatedTraining: NewTraining) =>
                this._saveTrainingData(updatedTraining).pipe(map((_) => setCategory)),
            ),
        );
    }

    deleteSet(indexExercise: number, indexSet: number, newTotal: number): Observable<void> {
        return this._trainingState$.pipe(
            take(1),
            map((trainingState: NewTraining) => {
                const updatedTraining = {
                    ...trainingState,
                    exercises: [...trainingState.exercises].map(
                        (exercise: SingleExercise, i: number) => {
                            if (i === indexExercise) {
                                return {
                                    ...exercise,
                                    sets: [...exercise.sets]
                                        .filter((_set: Set, i: number) => i !== indexSet)
                                        .map((set: Set) => {
                                            if (set.setNumber > indexSet + 1) {
                                                return {
                                                    ...set,
                                                    setNumber: set.setNumber - 1,
                                                };
                                            }
                                            return set;
                                        }),
                                    total: newTotal,
                                    exerciseData: {
                                        ...exercise.exerciseData,
                                        selectedSetCategories:
                                            exercise.exerciseData.selectedSetCategories.filter(
                                                (_category: SetCategoryType, i: number) =>
                                                    i !== indexSet,
                                            ),
                                    },
                                };
                            }
                            return exercise;
                        },
                    ),
                };
                return updatedTraining;
            }),
            concatMap((updatedTraining: NewTraining) => this._saveTrainingData(updatedTraining)),
        );
    }

    pushToAvailableExercises(
        currentTrainingState: NewTraining,
        toBeAddedExercise: Exercise[],
    ): Observable<void> {
        let updatedTraining: NewTraining = { ...currentTrainingState };
        updatedTraining = {
            ...updatedTraining,
            exercises: [...updatedTraining.exercises].map((exercise) => {
                const isDeletedExerciseInAE = exercise.availableExercises.find(
                    (exercise) => exercise._id === toBeAddedExercise[0]._id,
                );
                if (!isDeletedExerciseInAE) {
                    return {
                        ...exercise,
                        availableExercises: [
                            ...exercise.availableExercises,
                            toBeAddedExercise[0],
                        ].sort(this._compare),
                    };
                }
                return exercise;
            }),
        };
        return this._saveTrainingData(updatedTraining);
    }

    deleteExercise(
        currentTrainingState: NewTraining,
        deletedExerciseName?: string,
        indexExercise?: number,
    ): Observable<[NewTraining, Exercise[]]> {
        let updatedTraining: NewTraining;
        if (deletedExerciseName) {
            return this._exercisesStoreService.allExercisesState$.pipe(
                take(1),
                map((value) => value.Value),
                tap((_) => {
                    updatedTraining = {
                        ...currentTrainingState,
                        exercises: currentTrainingState.exercises.filter(
                            (exercise) => exercise.exerciseData.name !== deletedExerciseName,
                        ),
                    };
                }),
                map((allExercises: Exercise[]) => [
                    updatedTraining,
                    allExercises.filter((exercise) => exercise.name === deletedExerciseName),
                ]),
            );
        } else {
            updatedTraining = {
                ...currentTrainingState,
                exercises: currentTrainingState.exercises.filter(
                    (_exercise: SingleExercise, index: number) => index !== indexExercise,
                ),
            };
            const response = [updatedTraining, [] as Exercise[]] as [NewTraining, Exercise[]];
            return this._saveTrainingData(updatedTraining).pipe(switchMap((_) => of(response)));
        }
    }

    setsChanged(
        trainingData: SetTrainingData,
        activeSetCategory: SetCategoryType,
    ): Observable<void> {
        return this._trainingState$.pipe(
            take(1),
            switchMap((trainingState: NewTraining) => {
                let updatedTraining: NewTraining;
                const indexOfChangedExercise = trainingState.exercises.findIndex(
                    (singleExercise: SingleExercise) =>
                        singleExercise.exerciseData.name === trainingData.exerciseName,
                );
                const indexFoundSet = trainingState.exercises[
                    indexOfChangedExercise
                ].sets.findIndex((set: Set) => set.setNumber === trainingData.setNumber);
                if (indexFoundSet > -1) {
                    updatedTraining = {
                        ...trainingState,
                        exercises: [...trainingState.exercises].map(
                            (exercise: SingleExercise, i: number) => {
                                if (i === indexOfChangedExercise) {
                                    return {
                                        ...exercise,
                                        sets: [...exercise.sets].map((set: Set, j: number) => {
                                            if (j === indexFoundSet) {
                                                let updatedSet: Set;
                                                switch (activeSetCategory) {
                                                    case 'freeWeighted':
                                                    case 'dynamicWeighted': {
                                                        updatedSet = {
                                                            ...set,
                                                            weight: trainingData.weight,
                                                            reps: trainingData.reps,
                                                        };
                                                        break;
                                                    }
                                                    case 'dynamicBodyweight': {
                                                        updatedSet = {
                                                            ...set,
                                                            reps: trainingData.reps,
                                                        };
                                                        break;
                                                    }
                                                    case 'staticBodyweight': {
                                                        updatedSet = {
                                                            ...set,
                                                            duration: trainingData.duration,
                                                        };
                                                        break;
                                                    }
                                                    case 'staticWeighted': {
                                                        updatedSet = {
                                                            ...set,
                                                            weight: trainingData.weight,
                                                            duration: trainingData.duration,
                                                        };
                                                        break;
                                                    }
                                                    default: {
                                                        isNeverCheck(activeSetCategory);
                                                    }
                                                }
                                                return updatedSet;
                                            }
                                            return set;
                                        }),
                                        total: trainingData.total,
                                    };
                                }
                                return exercise;
                            },
                        ),
                    };
                } else {
                    let newSet: Set;
                    switch (activeSetCategory) {
                        case 'freeWeighted':
                        case 'dynamicWeighted': {
                            newSet = {
                                setNumber: trainingData.setNumber,
                                weight: trainingData.weight,
                                reps: trainingData.reps,
                            };
                            break;
                        }
                        case 'dynamicBodyweight': {
                            newSet = {
                                setNumber: trainingData.setNumber,
                                reps: trainingData.reps,
                            };
                            break;
                        }
                        case 'staticBodyweight': {
                            newSet = {
                                setNumber: trainingData.setNumber,
                                duration: trainingData.duration,
                            };
                            break;
                        }
                        case 'staticWeighted': {
                            newSet = {
                                setNumber: trainingData.setNumber,
                                weight: trainingData.weight,
                                duration: trainingData.duration,
                            };
                            break;
                        }
                        default: {
                            isNeverCheck(activeSetCategory);
                        }
                    }
                    updatedTraining = {
                        ...trainingState,
                        exercises: [...trainingState.exercises].map(
                            (exercise: SingleExercise, i: number) => {
                                if (i === indexOfChangedExercise) {
                                    return {
                                        ...exercise,
                                        sets: [...exercise.sets, newSet],
                                        total: trainingData.total,
                                    };
                                }
                                return exercise;
                            },
                        ),
                    };
                }
                return this._saveTrainingData(updatedTraining);
            }),
        );
    }

    restartSets(indexExercise: number, setCategory: SetCategoryType): Observable<SetCategoryType> {
        return this._trainingState$.pipe(
            take(1),
            map((currentTrainingState: NewTraining) => {
                let set: Set;
                switch (setCategory) {
                    case 'freeWeighted':
                    case 'dynamicWeighted': {
                        set = { setNumber: 1, weight: null, reps: null };
                        break;
                    }
                    case 'dynamicBodyweight': {
                        set = { setNumber: 1, reps: null };
                        break;
                    }
                    case 'staticBodyweight': {
                        set = {
                            setNumber: 1,
                            duration: null,
                        };
                        break;
                    }
                    case 'staticWeighted': {
                        set = {
                            setNumber: 1,
                            weight: null,
                            duration: null,
                        };
                        break;
                    }
                    default: {
                        isNeverCheck(setCategory);
                    }
                }
                const updatedTraining = {
                    ...currentTrainingState,
                    exercises: [...currentTrainingState.exercises].map(
                        (exercise: SingleExercise, index: number) => {
                            if (index === indexExercise) {
                                return {
                                    ...exercise,
                                    sets: [set],
                                    total: TOTAL_INITIAL_WEIGHT,
                                };
                            }
                            return exercise;
                        },
                    ),
                };
                return updatedTraining;
            }),
            concatMap((updatedTraining: NewTraining) => this._saveTrainingData(updatedTraining)),
            concatMap((_) => of(setCategory)),
        );
    }

    addNewExercise(alreadyUsedExercises: string[]): Observable<void> {
        return this._exercisesStoreService.allExercisesState$.pipe(
            take(1),
            map((streamData: StreamData<Exercise[]>) =>
                streamData.Value.filter(
                    (exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1,
                ),
            ),
            concatMap((availableExercises: Exercise[]) =>
                this.updateTrainingState('addNewExercise', {
                    trainingState: undefined,
                    exercises: availableExercises,
                }),
            ),
        );
    }

    updateExerciseName(
        selectedExercise: string,
        selectedIndex: number,
        trainingToBeUpdated: NewTraining,
        selectedExerciseData: Exercise,
    ): Observable<void> {
        const previousSelectedExercise: Exercise =
            trainingToBeUpdated.exercises[selectedIndex].exerciseData;
        const updatedTraining: NewTraining = {
            ...trainingToBeUpdated,
            exercises: [...trainingToBeUpdated.exercises].map(
                (exercise: SingleExercise, i: number) => {
                    if (i === selectedIndex) {
                        return {
                            ...exercise,
                            exerciseData: selectedExerciseData,
                        };
                    } else {
                        let availableExercises: Exercise[];
                        if (previousSelectedExercise.name) {
                            availableExercises = [
                                ...exercise.availableExercises,
                                previousSelectedExercise,
                            ].sort(this._compare);
                        } else {
                            availableExercises = [...exercise.availableExercises].sort(
                                this._compare,
                            );
                        }
                        return {
                            ...exercise,
                            availableExercises: availableExercises.filter(
                                (exercise: Exercise) => exercise.name !== selectedExercise,
                            ),
                        };
                    }
                },
            ),
        };
        return this._saveTrainingData(updatedTraining);
    }

    keepTrainingState(): Observable<boolean> {
        return from(Storage.get({ key: StorageItems.TRAINING_STATE })).pipe(
            map((storedData) => {
                if (!storedData || !storedData?.value) {
                    return false;
                }
                const trainingState: NewTraining = JSON.parse(storedData.value);
                this._trainingState$.next({ ...trainingState });
                return true;
            }),
        );
    }

    updateTrainingState(
        type: UpdateTrainingStateType,
        data: {
            trainingState: NewTraining;
            exercises?: Exercise[];
            userId?: string;
        },
    ): Observable<void> {
        return this._trainingState$.pipe(
            take(1),
            withLatestFrom(this._preferencesStoreService.preferencesChanged$),
            map(([currentTrainingState, currentPreferences]: [NewTraining, Preferences]) => {
                let updatedTraining: NewTraining;
                switch (type) {
                    case 'getExercises': {
                        const weightUnit = currentPreferences?.weightUnit ?? DEFAULT_WEIGHT_UNIT;
                        updatedTraining = {
                            ...EMPTY_TRAINING,
                            userId: data.userId,
                            preferences: {
                                weightUnit,
                                setDurationUnit: currentPreferences.setDurationUnit,
                            },
                            exercises: [
                                ...currentTrainingState.exercises,
                                createEmptyExercise(data.exercises),
                            ],
                        };

                        break;
                    }
                    case 'addNewExercise': {
                        updatedTraining = {
                            ...currentTrainingState,
                            exercises: [
                                ...currentTrainingState.exercises,
                                createEmptyExercise(data.exercises),
                            ],
                        };
                        break;
                    }
                    case 'newTrainingInit':
                    case 'openReorderModal':
                    case 'tryAgain': {
                        updatedTraining = { ...data.trainingState };
                        break;
                    }
                    case 'useTrainingSplit': {
                        updatedTraining = {
                            ...currentTrainingState,
                            exercises: [...data.exercises].map((exercise: Exercise) => ({
                                ...currentTrainingState.exercises[0],
                                exerciseData: {
                                    ...exercise,
                                    selectedSetCategories: Array(exercise.numberOfSets).fill(
                                        exercise.selectedSetCategories[0],
                                    ),
                                },
                                sets: Array(exercise.numberOfSets)
                                    .fill({
                                        setNumber: 1,
                                        weight: undefined,
                                        reps: undefined,
                                    } as Set)
                                    .map((set: Set, index: number) => ({
                                        ...set,
                                        setNumber: index + 1,
                                    })),
                                availableExercises: [],
                            })),
                            userId: data.userId,
                        };
                        break;
                    }
                    default: {
                        isNeverCheck(type);
                    }
                }
                return updatedTraining;
            }),
            switchMap((updatedTraining: NewTraining) => this._saveTrainingData(updatedTraining)),
        );
    }

    private _saveTrainingData(updatedTraining: NewTraining): Observable<void> {
        this._trainingState$.next(updatedTraining);
        return from(
            Storage.set({
                key: StorageItems.TRAINING_STATE,
                value: JSON.stringify(updatedTraining),
            }),
        ).pipe(take(1));
    }

    private _compare(a: Exercise, b: Exercise): number {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
}
