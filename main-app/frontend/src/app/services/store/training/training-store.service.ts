import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { take, tap, map, switchMap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { StreamData } from '../../../models/common/common.model';
import { Exercise } from '../../../models/training/exercise.model';
import { createEmptyExercise, EMPTY_TRAINING } from '../../../constants/training/new-training.const';
import { Training } from '../../../models/training/new-training/training.model';
import { SetTrainingData, Set } from '../../../models/training/shared/set.model';
import { SingleExercise } from '../../../models/training/shared/single-exercise.model';
import { StorageItems } from '../../../constants/enums/storage-items.enum';
import { PreferencesStoreService } from '../shared/preferences-store.service';
import { DEFAULT_WEIGHT_UNIT } from '../../../constants/shared/default-weight-format.const';

@Injectable({ providedIn: 'root' })
export class TrainingStoreService {

    private readonly _allExercisesChanged$$: BehaviorSubject<StreamData<Exercise[]>> = new BehaviorSubject<StreamData<Exercise[]>>(null);
    readonly allExercisesChanged$: Observable<StreamData<Exercise[]>> = this._allExercisesChanged$$.asObservable();

    private readonly _currentTrainingChanged$$: BehaviorSubject<Training> = new BehaviorSubject<Training>(EMPTY_TRAINING);
    readonly currentTrainingChanged$: Observable<Training> = this._currentTrainingChanged$$.asObservable();

    constructor(
        private readonly preferencesStoreService: PreferencesStoreService,
    ) { }

    emitAllExercises(exercises: StreamData<Exercise[]>): void {
        this._allExercisesChanged$$.next(exercises);
    }

    getCurrentTrainingState(): Training {
        return { ...this._currentTrainingChanged$$.getValue() };
    }

    addBodyweightToStorage(value: string): void {
        const updatedTraining = {
            ...this._currentTrainingChanged$$.getValue(),
            bodyweight: +value,
        };
        this.saveTrainingData({ ...updatedTraining })
            .subscribe();
    }

    deleteSet(
        indexExercise: number,
        indexSet: number,
        newTotal: number,
    ): void {
        const updatedTraining: Training = { ...this._currentTrainingChanged$$.getValue() };
        updatedTraining.exercises[indexExercise].sets.splice(indexSet, 1);
        updatedTraining.exercises[indexExercise].sets.map((set: Set) => {
            if (set.setNumber > (indexSet + 1)) {
                set.setNumber--;
            }
        });
        updatedTraining.exercises[indexExercise].total = newTotal;
        this.saveTrainingData({ ...updatedTraining })
            .subscribe();
    }

    pushToAvailableExercises(
        currentTrainingState: Training,
        toBeAddedExercise: Exercise[],
    ): Observable<void> {
        const updatedTraining: Training = { ...currentTrainingState };
        updatedTraining.exercises.map((exercise: SingleExercise) => {
            const isDeletedExerciseInAE: Exercise = exercise.availableExercises.find((exercise: Exercise) => exercise._id === toBeAddedExercise[0]._id);
            if (!isDeletedExerciseInAE) {
                exercise.availableExercises.push(toBeAddedExercise[0]);
                exercise.availableExercises.sort(this.compare);
            }
        });
        return this.saveTrainingData({ ...updatedTraining });
    }

    deleteExercise(
        currentTrainingState: Training,
        deletedExerciseName?: string,
        indexExercise?: number,
    ): Observable<[Training, Exercise[]]> {
        let updatedExercises: SingleExercise[] = [ ...currentTrainingState.exercises ];
        let updatedTraining: Training;
        if (deletedExerciseName) {
            return this.allExercisesChanged$
                .pipe(
                    take(1),
                    map(value => value.Value),
                    tap(_ => {
                        updatedExercises = updatedExercises.filter((exercise: SingleExercise) => exercise.exerciseData.name !== deletedExerciseName);
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
            const response = [updatedTraining, [] as Exercise[]] as [Training, Exercise[]];
            return this.saveTrainingData(updatedTraining)
                .pipe(
                    switchMap(_ => of(response)),
                );
        }
    }

    setsChanged(trainingData: SetTrainingData): Observable<void> {
        const updatedTraining: Training = { ...this._currentTrainingChanged$$.getValue() };
        const indexOfChangedExercise = updatedTraining.exercises.findIndex((singleExercise: SingleExercise) => singleExercise.exerciseData.name === trainingData.exerciseName);
        const indexFoundSet = updatedTraining.exercises[indexOfChangedExercise].sets.findIndex(set => set.setNumber === trainingData.setNumber);

        if (indexFoundSet > -1) {
            updatedTraining.exercises[indexOfChangedExercise].sets[indexFoundSet] = {
                ...updatedTraining.exercises[indexOfChangedExercise].sets[indexFoundSet],
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps,
            };
            updatedTraining.exercises[indexOfChangedExercise].total = trainingData.total;
        }
        else {
            updatedTraining.exercises[indexOfChangedExercise].sets.push({
                setNumber: trainingData.setNumber,
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps,
            });
            updatedTraining.exercises[indexOfChangedExercise].total = trainingData.total;
        }
        return this.saveTrainingData({ ...updatedTraining });
    }

    addNewExercise(alreadyUsedExercises: string[]): Observable<void> {
        const allExercises: Exercise[] = [ ...this._allExercisesChanged$$.getValue().Value ];
        const availableExercises = allExercises.filter((exercise: Exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1);
        return this.updateTrainingState(undefined, availableExercises);
    }

    updateExerciseChoices(
        selectedExercise: string,
        selectedIndex: number,
        trainingToBeUpdated: Training,
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
                    const trainingState: Training = JSON.parse(storedData.value);
                    this._currentTrainingChanged$$.next({ ...trainingState });
                    return true;
                }),
            );
    }

    updateTrainingState(
        newTrainingState?: Training,
        exercises?: Exercise[],
        restartAll?: boolean,
        userId?: string,
    ): Observable<void> {
        let updatedTraining: Training;
        if (exercises) {
            updatedTraining = this._currentTrainingChanged$$.getValue();
            if (restartAll) {
                const weightUnit = this.preferencesStoreService.getPreferences()?.weightUnit ?? DEFAULT_WEIGHT_UNIT;
                updatedTraining = {
                    ...EMPTY_TRAINING,
                    userId,
                    weightUnit,
                };
            }
            updatedTraining.exercises.push(createEmptyExercise(exercises));
        }
        else {
            updatedTraining = newTrainingState;
        }
        return this.saveTrainingData({ ...updatedTraining });
    }

    private saveTrainingData(updatedTraining: Training): Observable<void> {
        this._currentTrainingChanged$$.next({ ...updatedTraining });
        return from(Storage.set({
            key: StorageItems.TRAINING_STATE,
            value: JSON.stringify({ ...updatedTraining }),
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
