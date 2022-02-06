import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { environment } from '../../../environments/environment';
import { StreamData } from '../../models/common/interfaces/common.model';
import { LocalStorageItems } from '../../models/common/interfaces/common.model';
import { GeneralResponseData } from '../../models/general-response.model';
import { Exercise } from '../../models/training/exercise.model';
import { createEmptyExercise, EMPTY_TRAINING } from '../../models/training/new-training/empty-training.model';
import { Training } from '../../models/training/new-training/new-training.model';
import { SetTrainingData } from '../../models/training/shared/set.model';
import { Set } from '../../models/training/shared/set.model';
import { SingleExercise } from '../../models/training/shared/single-exercise.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class NewTrainingService {

    private readonly allExercisesChanged$$: BehaviorSubject<Exercise[]> = new BehaviorSubject<Exercise[]>([]);
    readonly allExercisesChanged$: Observable<Exercise[]> = this.allExercisesChanged$$.asObservable();

    private readonly currentTrainingChanged$$: BehaviorSubject<Training> = new BehaviorSubject<Training>(EMPTY_TRAINING);
    readonly currentTrainingChanged$: Observable<Training> = this.currentTrainingChanged$$.asObservable();

    constructor(
        private readonly http: HttpClient,
        private readonly authService: AuthService,
    ) {}

    getExercises(): Observable<StreamData<Exercise[]>> {
        return this.http.get<StreamData<Exercise[]>>(environment.BACKEND + '/training/get_exercises').pipe(
            switchMap((response: StreamData<Exercise[]>) => {
                const trainingState: Training = JSON.parse(localStorage.getItem(LocalStorageItems.TRAINING_STATE));
                if (!trainingState) {
                    return this.authService.loggedUser$.pipe(
                        take(1),
                        tap((authResponseData: AuthResponseData) => {
                            this.updateTrainingState(
                                response.Value,
                                true,
                                authResponseData._id,
                            );
                            this.allExercisesChanged$$.next(response.Value);
                            localStorage.setItem(LocalStorageItems.ALL_EXERCISES, JSON.stringify(response.Value));
                        }),
                        switchMap(_ => of(response)),
                    );
                }
                else {
                    return of(response);
                }
            }),
        );
    }

    addTraining(trainingData: Training): Observable<GeneralResponseData> {
        return this.http.post<GeneralResponseData>(environment.BACKEND + '/training/handle_training', { trainingData: trainingData });
    }

    updateTraining(
        trainingData: Training,
        trainingId: string,
    ): Observable<GeneralResponseData> {
        return this.http.put<GeneralResponseData>(environment.BACKEND + `/training/handle_training/${trainingId}`, { updatedTrainingData: trainingData });
    }

    /**************************************** */

    getCurrentTrainingState(): Training {
        return this.currentTrainingChanged$$.getValue();
    }

    addBodyweightToStorage(value: string): void {
        const updatedTraining = {
            ...this.currentTrainingChanged$$.getValue(),
            bodyweight: +value,
        };
        this.saveTrainingData({ ...updatedTraining });
    }

    deleteSet(
        indexExercise: number,
        indexSet: number,
        newTotal: number,
    ): void {
        const updatedTraining: Training = { ...this.currentTrainingChanged$$.getValue() };
        updatedTraining.exercise[indexExercise].sets.splice(indexSet, 1);
        updatedTraining.exercise[indexExercise].sets.map((set: Set) => {
            if (set.setNumber > (indexSet + 1)) {
                set.setNumber--;
            }
        });
        updatedTraining.exercise[indexExercise].total = newTotal;
        this.saveTrainingData({ ...updatedTraining });
    }

    pushToAvailableExercises(
        currentTrainingState: Training,
        toBeAddedExercise: Exercise[],
    ): void {
        const updatedTraining: Training = { ...currentTrainingState };
        updatedTraining.exercise.map((exercise: SingleExercise) => {
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
        let updatedExercises: SingleExercise[] = [ ...currentTrainingState.exercise ];
        let updatedTraining: Training;
        if (deletedExerciseName) {
            return this.allExercisesChanged$.pipe(
                take(1),
                tap(_ => {
                    updatedExercises = updatedExercises.filter((exercise: SingleExercise) => exercise.exerciseName !== deletedExerciseName);
                    updatedTraining = {
                        ...currentTrainingState,
                        exercise: updatedExercises,
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
                exercise: updatedExercises,
            };
            this.saveTrainingData(updatedTraining);
            return of([
                updatedTraining,
                null,
            ]);
        }
    }

    setsChanged(trainingData: SetTrainingData): void {
        const updatedTraining: Training = { ...this.currentTrainingChanged$$.getValue() };
        const indexOfChangedExercise: number = updatedTraining.exercise.findIndex((singleExercise: SingleExercise) => singleExercise.exerciseName === trainingData.exerciseName);
        const indexFoundSet = updatedTraining.exercise[indexOfChangedExercise].sets.findIndex(set => set.setNumber === trainingData.setNumber);

        if (indexFoundSet > -1) {
            updatedTraining.exercise[indexOfChangedExercise].sets[indexFoundSet] = {
                ...updatedTraining.exercise[indexOfChangedExercise].sets[indexFoundSet],
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps,
            };
            updatedTraining.exercise[indexOfChangedExercise].total = trainingData.total;
        }
        else {
            updatedTraining.exercise[indexOfChangedExercise].sets.push({
                setNumber: trainingData.setNumber,
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps,
            });
            updatedTraining.exercise[indexOfChangedExercise].total = trainingData.total;
        }
        this.saveTrainingData({ ...updatedTraining });
    }

    addNewExercise(alreadyUsedExercises: string[]): void {
        const allExercises: Exercise[] = [ ...this.allExercisesChanged$$.getValue() ];
        const availableExercises: Exercise[] = allExercises.filter((exercise: Exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1);
        this.updateTrainingState(availableExercises);
    }

    updateExerciseChoices(
        selectedExercise: string,
        selectedIndex: number,
        disabledTooltip: boolean,
    ): void {
        const updatedTraining: Training = { ...this.currentTrainingChanged$$.getValue() };
        updatedTraining.exercise[selectedIndex].exerciseName = selectedExercise;
        updatedTraining.exercise[selectedIndex].disabledTooltip = disabledTooltip;
        updatedTraining.exercise.forEach((exercise: SingleExercise, index: number) => {
            if (index !== selectedIndex) {
                exercise.availableExercises = exercise.availableExercises.filter((exercise: Exercise) => exercise.name !== selectedExercise);
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
        this.currentTrainingChanged$$.next({ ...trainingState });
        this.allExercisesChanged$$.next([ ...allExercises ]);
    }

    updateTrainingState(
        exercises: Exercise[],
        restartAll?: boolean,
        userId?: string,
    ): void {
        let updatedTraining: Training = this.currentTrainingChanged$$.getValue();
        if (restartAll) {
            updatedTraining = {
                ...EMPTY_TRAINING,
                userId: userId,
            };
        }
        updatedTraining.exercise.push(createEmptyExercise(exercises));
        this.saveTrainingData(updatedTraining);
    }

    updateTrainingData(editTraining: Training): void {
        this.saveTrainingData({ ...editTraining });
    }

    clearTrainingData(): void {
        this.saveTrainingData({ ...EMPTY_TRAINING });
    }

    private saveTrainingData(updatedTraining: Training): void {
        this.currentTrainingChanged$$.next({ ...updatedTraining });
        localStorage.setItem(LocalStorageItems.TRAINING_STATE, JSON.stringify({ ...updatedTraining }));
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
