import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';
import { LocalStorageItems } from '../../../models/common/interfaces/common.model';
import { Exercise } from '../../../models/training/exercise.model';
import { createEmptyExercise, EMPTY_TRAINING } from '../../../models/training/new-training/empty-training.model';
import { Training } from '../../../models/training/new-training/training.model';
import { SetTrainingData, Set } from '../../../models/training/shared/set.model';
import { SingleExercise } from '../../../models/training/shared/single-exercise.model';

@Injectable({ providedIn: 'root' })
export class NewTrainingStateService {

    private readonly _allExercisesChanged$$: BehaviorSubject<Exercise[]> = new BehaviorSubject<Exercise[]>([]);
    readonly allExercisesChanged$: Observable<Exercise[]> = this._allExercisesChanged$$.asObservable();

    private readonly _currentTrainingChanged$$: BehaviorSubject<Training> = new BehaviorSubject<Training>(EMPTY_TRAINING);
    readonly currentTrainingChanged$: Observable<Training> = this._currentTrainingChanged$$.asObservable();

    emitAllExercises(exercises: Exercise[]): void {
        this._allExercisesChanged$$.next(exercises);
    }

    getCurrentTrainingState(): Training {
        return this._currentTrainingChanged$$.getValue();
    }

    addBodyweightToStorage(value: string): void {
        const updatedTraining = {
            ...this._currentTrainingChanged$$.getValue(),
            bodyweight: +value,
        };
        this.saveTrainingData({ ...updatedTraining });
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
        this.saveTrainingData({ ...updatedTraining });
    }

    pushToAvailableExercises(
        currentTrainingState: Training,
        toBeAddedExercise: Exercise[],
    ): void {
        const updatedTraining: Training = { ...currentTrainingState };
        updatedTraining.exercises.map((exercise: SingleExercise) => {
            const isDeletedExerciseInAE: Exercise = exercise.availableExercises.find((exercise: Exercise) => exercise._id === toBeAddedExercise[0]._id);
            if (!isDeletedExerciseInAE) {
                exercise.availableExercises.push(toBeAddedExercise[0]);
                exercise.availableExercises.sort(this.compare);
            }
        });
        this.saveTrainingData({ ...updatedTraining });
    }

    deleteExercise(
        currentTrainingState: Training,
        deletedExerciseName?: string,
        indexExercise?: number,
    ): Observable<[Training, Exercise[]]> {
        let updatedExercises: SingleExercise[] = [ ...currentTrainingState.exercises ];
        let updatedTraining: Training;
        if (deletedExerciseName) {
            return this.allExercisesChanged$.pipe(
                take(1),
                tap(_ => {
                    updatedExercises = updatedExercises.filter((exercise: SingleExercise) => exercise.exerciseName !== deletedExerciseName);
                    updatedTraining = {
                        ...currentTrainingState,
                        exercises: updatedExercises,
                    };
                }),
                map((allExercises: Exercise[]) =>
                    [
                        updatedTraining,
                        allExercises.filter(exercise => exercise.Name === deletedExerciseName),
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
            this.saveTrainingData(updatedTraining);
            return of([
                updatedTraining,
                null,
            ]);
        }
    }

    setsChanged(trainingData: SetTrainingData): void {
        const updatedTraining: Training = { ...this._currentTrainingChanged$$.getValue() };
        const indexOfChangedExercise: number = updatedTraining.exercises.findIndex((singleExercise: SingleExercise) => singleExercise.exerciseName === trainingData.exerciseName);
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
        this.saveTrainingData({ ...updatedTraining });
    }

    addNewExercise(alreadyUsedExercises: string[]): void {
        const allExercises: Exercise[] = [ ...this._allExercisesChanged$$.getValue() ];
        const availableExercises: Exercise[] = allExercises.filter((exercise: Exercise) => alreadyUsedExercises.indexOf(exercise.Name) === -1);
        this.updateTrainingState(undefined, availableExercises);
    }

    updateExerciseChoices(
        selectedExercise: string,
        selectedIndex: number,
        disabledTooltip: boolean,
    ): void {
        const updatedTraining: Training = { ...this._currentTrainingChanged$$.getValue() };
        updatedTraining.exercises[selectedIndex].exerciseName = selectedExercise;
        updatedTraining.exercises[selectedIndex].disabledTooltip = disabledTooltip;
        updatedTraining.exercises.forEach((exercise: SingleExercise, index: number) => {
            if (index !== selectedIndex) {
                exercise.availableExercises = exercise.availableExercises.filter((exercise: Exercise) => exercise.Name !== selectedExercise);
            }
        });
        this.saveTrainingData({ ...updatedTraining });
    }

    keepTrainingState(): void {
        const trainingState: Training = JSON.parse(localStorage.getItem(LocalStorageItems.TRAINING_STATE));
        const allExercises: Exercise[] = JSON.parse(localStorage.getItem(LocalStorageItems.ALL_EXERCISES));

        if (!trainingState || !allExercises) {
            return;
        }
        this._currentTrainingChanged$$.next({ ...trainingState });
        this._allExercisesChanged$$.next([ ...allExercises ]);
    }

    updateTrainingState(
        newTrainingState?: Training,
        exercises?: Exercise[],
        restartAll?: boolean,
        userId?: string,
    ): void {
        let updatedTraining: Training;
        if (exercises) {
            updatedTraining = this._currentTrainingChanged$$.getValue();
            if (restartAll) {
                updatedTraining = {
                    ...EMPTY_TRAINING,
                    userId: userId,
                };
            }
            updatedTraining.exercises.push(createEmptyExercise(exercises));
        }
        else {
            updatedTraining = newTrainingState;
        }
        this.saveTrainingData({ ...updatedTraining });
    }

    clearTrainingState(): void {
        this.saveTrainingData({ ...EMPTY_TRAINING });
    }

    private saveTrainingData(updatedTraining: Training): void {
        this._currentTrainingChanged$$.next({ ...updatedTraining });
        localStorage.setItem(LocalStorageItems.TRAINING_STATE, JSON.stringify({ ...updatedTraining }));
    }

    private compare(
        a: Exercise,
        b: Exercise,
    ): number {
        if (a.Name < b.Name) {
            return -1;
        }
        if (a.Name > b.Name) {
            return 1;
        }
        return 0;
    }
}
