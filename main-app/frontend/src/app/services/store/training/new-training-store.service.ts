import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, from, Observable, of } from 'rxjs';
import { take, tap, map, switchMap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { StreamData } from '../../../models/common/common.model';
import { Exercise } from '../../../models/training/exercise.model';
import { createEmptyExercise, EMPTY_TRAINING } from '../../../constants/training/new-training.const';
import { NewTraining } from '../../../models/training/new-training/new-training.model';
import { SetTrainingData, Set } from '../../../models/training/shared/set.model';
import { SingleExercise } from '../../../models/training/shared/single-exercise.model';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { PreferencesStoreService } from '../shared/preferences-store.service';
import { DEFAULT_WEIGHT_UNIT } from '../../../constants/shared/default-weight-format.const';
import { WeightUnit } from '../../../models/common/preferences.type';
import { Preferences } from '../../../models/common/preferences.model';

@Injectable({ providedIn: 'root' })
export class NewTrainingStoreService {

    private readonly _allExercisesChanged$$: BehaviorSubject<StreamData<Exercise[]>> = new BehaviorSubject<StreamData<Exercise[]>>(null);
    readonly allExercisesChanged$: Observable<StreamData<Exercise[]>> = this._allExercisesChanged$$.asObservable();

    private readonly _currentTrainingChanged$$: BehaviorSubject<NewTraining> = new BehaviorSubject<NewTraining>(EMPTY_TRAINING);
    readonly currentTrainingChanged$: Observable<NewTraining> = this._currentTrainingChanged$$.asObservable();

    constructor(
        private readonly preferencesStoreService: PreferencesStoreService,
    ) { }

    emitAllExercises(exercises: StreamData<Exercise[]>): void {
        this._allExercisesChanged$$.next(exercises);
    }

    getCurrentTrainingState(): NewTraining {
        return { ...this._currentTrainingChanged$$.getValue() };
    }

    updateWeightUnit(weightUnit: WeightUnit): Observable<void> {
        const updatedTraining = {
            ...this._currentTrainingChanged$$.getValue(),
            weightUnit,
        };
        return this.saveTrainingData(updatedTraining);
    }

    updateBodyweight(value: string): void {
        const updatedTraining = {
            ...this._currentTrainingChanged$$.getValue(),
            bodyweight: +value,
        };
        this.saveTrainingData(updatedTraining)
            .subscribe();
    }

    deleteSet(
        indexExercise: number,
        indexSet: number,
        newTotal: number,
    ): void {
        let updatedTraining: NewTraining = this._currentTrainingChanged$$.getValue();
        updatedTraining = {
            ...updatedTraining,
            exercises: [...updatedTraining.exercises]
                .map((exercise: SingleExercise, i: number) => {
                    if (i === indexExercise) {
                        return {
                            ...exercise,
                            sets: [...exercise.sets]
                                .filter((_set: Set, i: number) => i !== indexSet)
                                .map((set: Set) => {
                                    if (set.setNumber > (indexSet + 1)) {
                                        set.setNumber--;
                                    }
                                    return set;
                                }),
                            total: newTotal,
                        };
                    }
                    return exercise;
                }),
        };
        this.saveTrainingData(updatedTraining)
            .subscribe();
    }

    pushToAvailableExercises(
        currentTrainingState: NewTraining,
        toBeAddedExercise: Exercise[],
    ): Observable<void> {
        let updatedTraining: NewTraining = { ...currentTrainingState };
        updatedTraining = {
            ...updatedTraining,
            exercises: [...updatedTraining.exercises]
                .map(exercise => {
                    const isDeletedExerciseInAE = exercise.availableExercises.find(exercise => exercise._id === toBeAddedExercise[0]._id);
                    if (!isDeletedExerciseInAE) {
                        return {
                            ...exercise,
                            availableExercises: [...exercise.availableExercises, toBeAddedExercise[0]]
                                .sort(this.compare),
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
        let updatedExercises: SingleExercise[] = [ ...currentTrainingState.exercises ];
        let updatedTraining: NewTraining;
        if (deletedExerciseName) {
            return this.allExercisesChanged$
                .pipe(
                    take(1),
                    map(value => value.Value),
                    tap(_ => {
                        updatedExercises = updatedExercises.filter(exercise => exercise.exerciseData.name !== deletedExerciseName);
                        updatedTraining = {
                            ...currentTrainingState,
                            exercises: updatedExercises,
                        };
                    }),
                    map((allExercises: Exercise[]) =>
                        [
                            updatedTraining,
                            allExercises.filter(exercise => exercise.name === deletedExerciseName),
                        ],
                    ),
                );
        }
        else {
            updatedExercises = updatedExercises.filter((_exercise: SingleExercise, index: number) => index !== indexExercise);
            updatedTraining = {
                ...currentTrainingState,
                exercises: updatedExercises,
            };
            const response = [updatedTraining, [] as Exercise[]] as [NewTraining, Exercise[]];
            return this.saveTrainingData(updatedTraining)
                .pipe(
                    switchMap(_ => of(response)),
                );
        }
    }

    setsChanged(trainingData: SetTrainingData): Observable<void> {
        let updatedTraining: NewTraining = this._currentTrainingChanged$$.getValue();
        const indexOfChangedExercise = updatedTraining.exercises.findIndex((singleExercise: SingleExercise) => singleExercise.exerciseData.name === trainingData.exerciseName);
        const indexFoundSet = updatedTraining.exercises[indexOfChangedExercise].sets.findIndex(set => set.setNumber === trainingData.setNumber);

        if (indexFoundSet > -1) {
            updatedTraining = {
                ...updatedTraining,
                exercises: [...updatedTraining.exercises]
                    .map((exercise: SingleExercise, i: number) => {
                        if (i === indexOfChangedExercise) {
                            return {
                                ...exercise,
                                sets: [...exercise.sets]
                                    .map((set: Set, j: number) => {
                                        if (j === indexFoundSet) {
                                            return {
                                                ...set,
                                                weightLifted: trainingData.weightLifted,
                                                reps: trainingData.reps,
                                            };
                                        }
                                        return set;
                                    }),
                                total: trainingData.total,
                            };
                        }
                        return exercise;
                    }),
            };
        }
        else {
            const newSet = {
                setNumber: trainingData.setNumber,
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps,
            } as Set;
            updatedTraining = {
                ...updatedTraining,
                exercises: [...updatedTraining.exercises]
                    .map((exercise: SingleExercise, i: number) => {
                        if (i === indexOfChangedExercise) {
                            return {
                                ...exercise,
                                sets: [...exercise.sets, newSet],
                                total: trainingData.total,
                            };
                        }
                        return exercise;
                    }),
            };
        }
        return this.saveTrainingData(updatedTraining);
    }

    addNewExercise(alreadyUsedExercises: string[]): Observable<void> {
        const allExercises = [ ...this._allExercisesChanged$$.getValue().Value ];
        const availableExercises = allExercises.filter(exercise => alreadyUsedExercises.indexOf(exercise.name) === -1);
        return this.updateTrainingState(undefined, availableExercises);
    }
    //TODO: Rewrite
    updateExerciseChoices(
        selectedExercise: string,
        selectedIndex: number,
        trainingToBeUpdated: NewTraining,
        selectedExerciseData: Exercise,
    ): Observable<void> {
        trainingToBeUpdated.exercises[selectedIndex].exerciseData = selectedExerciseData;
        trainingToBeUpdated.exercises.forEach((exercise: SingleExercise, index: number) => {
            if (index !== selectedIndex) {
                exercise.availableExercises = exercise.availableExercises.filter((exercise: Exercise) => exercise.name !== selectedExercise);
            }
        });
        return this.saveTrainingData({ ...trainingToBeUpdated });
    }

    keepTrainingState(): Observable<boolean> {
        return from(Storage.get({ key: StorageItems.TRAINING_STATE }))
            .pipe(
                map(storedData => {
                    if (!storedData || !storedData?.value) {
                        return false;
                    }
                    const trainingState: NewTraining = JSON.parse(storedData.value);
                    this._currentTrainingChanged$$.next({ ...trainingState });
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
            this.currentTrainingChanged$,
            this.preferencesStoreService.preferencesChanged$,
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
                }
                else {
                    updatedTraining = newTrainingState;
                }
                return updatedTraining;
            }),
            switchMap((updatedTraining: NewTraining) => this.saveTrainingData(updatedTraining)),
        );
    }

    private saveTrainingData(updatedTraining: NewTraining): Observable<void> {
        this._currentTrainingChanged$$.next(updatedTraining);
        return from(Storage.set({
            key: StorageItems.TRAINING_STATE,
            value: JSON.stringify(updatedTraining),
        })).pipe(take(1));
    }

    private compare(
        a: Exercise,
        b: Exercise,
    ): number {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
}
