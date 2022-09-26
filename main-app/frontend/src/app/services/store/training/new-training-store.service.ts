import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, from, Observable, of } from 'rxjs';
import { take, tap, map, switchMap, concatMap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { StreamData } from '../../../models/common/common.model';
import { Exercise } from '../../../models/training/exercise.model';
import {
    createEmptyExercise,
    EMPTY_TRAINING,
    TOTAL_INITIAL_WEIGHT,
} from '../../../constants/training/new-training.const';
import { NewTraining } from '../../../models/training/new-training/new-training.model';
import { SetTrainingData, Set } from '../../../models/training/shared/set.model';
import { SingleExercise } from '../../../models/training/shared/single-exercise.model';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { PreferencesStoreService } from '../shared/preferences-store.service';
import { DEFAULT_WEIGHT_UNIT } from '../../../constants/shared/default-weight-format.const';
import { WeightUnit } from '../../../models/common/preferences.type';
import { Preferences } from '../../../models/common/preferences.model';
import { SetConstituentExistsType } from '../../../models/training/shared/set.type';

@Injectable({ providedIn: 'root' })
export class NewTrainingStoreService {
    private readonly _allExercisesChanged$$: BehaviorSubject<StreamData<Exercise[]>> =
        new BehaviorSubject<StreamData<Exercise[]>>(null);
    readonly allExercisesChanged$: Observable<StreamData<Exercise[]>> =
        this._allExercisesChanged$$.asObservable();

    private readonly _currentTrainingState$: BehaviorSubject<NewTraining> =
        new BehaviorSubject<NewTraining>(EMPTY_TRAINING);
    readonly currentTrainingState$: Observable<NewTraining> =
        this._currentTrainingState$.asObservable();

    constructor(private readonly _preferencesStoreService: PreferencesStoreService) {}

    emitAllExercises(exercises: StreamData<Exercise[]>): void {
        this._allExercisesChanged$$.next(exercises);
    }

    getCurrentTrainingState(): NewTraining {
        return { ...this._currentTrainingState$.getValue() };
    }

    updateWeightUnit(weightUnit: WeightUnit): Observable<void> {
        const updatedTraining = {
            ...this._currentTrainingState$.getValue(),
            weightUnit,
        };
        return this.saveTrainingData(updatedTraining);
    }

    updateTrainingDate(trainingDate: string): Observable<void> {
        const updatedTraining = {
            ...this._currentTrainingState$.getValue(),
            trainingDate,
        };
        return this.saveTrainingData(updatedTraining);
    }

    updateBodyweight(value: string): Observable<void> {
        const updatedTraining = {
            ...this._currentTrainingState$.getValue(),
            bodyweight: +value,
        };
        return this.saveTrainingData(updatedTraining);
    }

    deleteSet(indexExercise: number, indexSet: number, newTotal: number): void {
        let updatedTraining: NewTraining = this._currentTrainingState$.getValue();
        updatedTraining = {
            ...updatedTraining,
            exercises: [...updatedTraining.exercises].map((exercise: SingleExercise, i: number) => {
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
                    };
                }
                return exercise;
            }),
        };
        this.saveTrainingData(updatedTraining).subscribe();
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
                        ].sort(this.compare),
                    };
                }
                return exercise;
            }),
        };
        return this.saveTrainingData(updatedTraining);
    }

    deleteExercise(
        currentTrainingState: NewTraining,
        deletedExerciseName?: string,
        indexExercise?: number,
    ): Observable<[NewTraining, Exercise[]]> {
        let updatedTraining: NewTraining;
        if (deletedExerciseName) {
            return this.allExercisesChanged$.pipe(
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
            return this.saveTrainingData(updatedTraining).pipe(switchMap((_) => of(response)));
        }
    }

    setsChanged(trainingData: SetTrainingData): Observable<void> {
        let updatedTraining: NewTraining = this._currentTrainingState$.getValue();
        const indexOfChangedExercise = updatedTraining.exercises.findIndex(
            (singleExercise: SingleExercise) =>
                singleExercise.exerciseData.name === trainingData.exerciseName,
        );
        const indexFoundSet = updatedTraining.exercises[indexOfChangedExercise].sets.findIndex(
            (set: Set) => set.setNumber === trainingData.setNumber,
        );

        if (indexFoundSet > -1) {
            updatedTraining = {
                ...updatedTraining,
                exercises: [...updatedTraining.exercises].map(
                    (exercise: SingleExercise, i: number) => {
                        if (i === indexOfChangedExercise) {
                            return {
                                ...exercise,
                                sets: [...exercise.sets].map((set: Set, j: number) => {
                                    if (j === indexFoundSet) {
                                        let updatedSet: Set;
                                        if (trainingData?.weightLifted) {
                                            updatedSet = {
                                                ...set,
                                                weightLifted: trainingData.weightLifted,
                                                reps: trainingData.reps,
                                            };
                                        } else {
                                            updatedSet = {
                                                ...set,
                                                reps: trainingData.reps,
                                            };
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
            if (trainingData.weightLifted) {
                newSet = {
                    setNumber: trainingData.setNumber,
                    weightLifted: trainingData.weightLifted,
                    reps: trainingData.reps,
                } as Set;
            } else {
                newSet = {
                    setNumber: trainingData.setNumber,
                    reps: trainingData.reps,
                } as Set;
            }
            updatedTraining = {
                ...updatedTraining,
                exercises: [...updatedTraining.exercises].map(
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
        return this.saveTrainingData(updatedTraining);
    }

    restartSets(
        indexExercise: number,
        setConstituentsExists: SetConstituentExistsType,
    ): Observable<void> {
        return this._currentTrainingState$.pipe(
            take(1),
            map((currentTrainingState: NewTraining) => {
                let set: Set;
                if (setConstituentsExists.weightLifted && setConstituentsExists.reps) {
                    set = { setNumber: 1, weightLifted: null, reps: null };
                }
                if (setConstituentsExists.reps && !setConstituentsExists.weightLifted) {
                    set = { setNumber: 1, reps: null };
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
            concatMap((updatedTraining: NewTraining) => this.saveTrainingData(updatedTraining)),
        );
    }

    addNewExercise(alreadyUsedExercises: string[]): Observable<void> {
        const allExercises = [...this._allExercisesChanged$$.getValue().Value];
        const availableExercises = allExercises.filter(
            (exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1,
        );
        return this.updateTrainingState(undefined, availableExercises);
    }

    updateExerciseChoices(
        selectedExercise: string,
        selectedIndex: number,
        trainingToBeUpdated: NewTraining,
        selectedExerciseData: Exercise,
    ): Observable<NewTraining> {
        const previousSelectedExercise = trainingToBeUpdated.exercises.find(
            (_exercise: SingleExercise, index: number) => index === selectedIndex,
        ).exerciseData;
        const updatedTraining: NewTraining = {
            ...trainingToBeUpdated,
            exercises: trainingToBeUpdated.exercises.map((exercise: SingleExercise, i: number) => {
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
                        ].sort(this.compare);
                    } else {
                        availableExercises = [...exercise.availableExercises].sort(this.compare);
                    }
                    return {
                        ...exercise,
                        availableExercises: availableExercises.filter(
                            (exercise: Exercise) => exercise.name !== selectedExercise,
                        ),
                    };
                }
            }),
        };
        return this.saveTrainingData(updatedTraining).pipe(switchMap((_) => of(updatedTraining)));
    }

    keepTrainingState(): Observable<boolean> {
        return from(Storage.get({ key: StorageItems.TRAINING_STATE })).pipe(
            map((storedData) => {
                if (!storedData || !storedData?.value) {
                    return false;
                }
                const trainingState: NewTraining = JSON.parse(storedData.value);
                this._currentTrainingState$.next({ ...trainingState });
                return true;
            }),
        );
    }

    updateTrainingState(
        newTrainingState?: NewTraining,
        exercises?: Exercise[],
        restartAll?: boolean,
        userId?: string,
    ): Observable<void> {
        return combineLatest([
            this.currentTrainingState$,
            this._preferencesStoreService.preferencesChanged$,
        ]).pipe(
            take(1),
            map(([currentTrainingState, currentPreferences]: [NewTraining, Preferences]) => {
                let updatedTraining: NewTraining;
                if (exercises) {
                    updatedTraining = currentTrainingState;
                    if (restartAll) {
                        const weightUnit = currentPreferences?.weightUnit ?? DEFAULT_WEIGHT_UNIT;
                        updatedTraining = {
                            ...EMPTY_TRAINING,
                            userId,
                            weightUnit,
                        };
                    }
                    updatedTraining = {
                        ...updatedTraining,
                        exercises: [...updatedTraining.exercises, createEmptyExercise(exercises)],
                    };
                } else {
                    updatedTraining = newTrainingState;
                }
                return updatedTraining;
            }),
            switchMap((updatedTraining: NewTraining) => this.saveTrainingData(updatedTraining)),
        );
    }

    private saveTrainingData(updatedTraining: NewTraining): Observable<void> {
        this._currentTrainingState$.next(updatedTraining);
        return from(
            Storage.set({
                key: StorageItems.TRAINING_STATE,
                value: JSON.stringify(updatedTraining),
            }),
        ).pipe(take(1));
    }

    private compare(a: Exercise, b: Exercise): number {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
}
