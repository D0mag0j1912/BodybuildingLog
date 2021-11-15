import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { environment } from '../../../environments/environment';
import { GeneralResponseData } from '../../models/general-response.model';
import { Exercise } from '../../models/training/exercise.model';
import { ExerciseFetch } from '../../models/training/exercise.model';
import { EMPTY_TRAINING } from '../../models/training/new-training/empty-training.model';
import { NewTraining, SingleExercise } from '../../models/training/new-training/new-training.model';
import { SetTrainingData } from '../../models/training/new-training/set.model';
import { Set } from '../../models/training/new-training/set.model';
import { createInitialSet } from '../../models/training/new-training/set.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class NewTrainingService {

    private readonly allExercisesChanged$$: BehaviorSubject<Exercise[]> = new BehaviorSubject<Exercise[]>([]);
    readonly allExercisesChanged$: Observable<Exercise[]> = this.allExercisesChanged$$.asObservable();

    private readonly currentTrainingChanged$$: BehaviorSubject<NewTraining> = new BehaviorSubject<NewTraining>(EMPTY_TRAINING);
    readonly currentTrainingChanged$: Observable<NewTraining> = this.currentTrainingChanged$$.asObservable();

    constructor(
        private readonly http: HttpClient,
        private readonly authService: AuthService,
    ){}

    getExercises(): Observable<AuthResponseData | ExerciseFetch> {
        return this.http.get<Exercise[]>(environment.BACKEND + '/get_exercises').pipe(
            switchMap((exercises: Exercise[]) => {
                const trainingState: NewTraining = JSON.parse(localStorage.getItem('trainingState'));
                if(!trainingState){
                    return this.authService.loggedUser$.pipe(
                        take(1),
                        tap((authResponseData: AuthResponseData) => {
                            this.updateTrainingState(
                                exercises,
                                0,
                                true,
                                authResponseData._id,
                            );
                            this.allExercisesChanged$$.next(exercises as Exercise[]);
                            localStorage.setItem('allExercises', JSON.stringify(exercises as Exercise[]));
                        }),
                    );
                }
                else {
                    return of('alreadyFetched' as ExerciseFetch);
                }
            }),
        );
    }

    addTraining(trainingData: NewTraining): Observable<GeneralResponseData> {
        return this.http.post<GeneralResponseData>(environment.BACKEND + '/handle_training', { trainingData: trainingData });
    }

    updateTraining(
        trainingData: NewTraining,
        trainingId: string,
    ): Observable<GeneralResponseData> {
        return this.http.put<GeneralResponseData>(environment.BACKEND + `/handle_training/${trainingId}`, { updatedTrainingData: trainingData });
    }

    /**************************************** */

    addBodyweightToStorage(value: string): void {
        const updatedTraining: NewTraining = {
            ...this.currentTrainingChanged$$.getValue(),
            bodyweight: +value,
        } as NewTraining;
        this.saveTrainingData({ ...updatedTraining } as NewTraining);
    }

    deleteSet(
        indexExercise: number,
        indexSet: number,
        newTotal: number,
    ): void {
        const updatedTraining: NewTraining = { ...this.currentTrainingChanged$$.getValue() };
        updatedTraining.exercise[indexExercise].sets.splice(indexSet, 1);
        updatedTraining.exercise[indexExercise].sets.map((set: Set) => {
            if(set.setNumber > (indexSet + 1)){
                set.setNumber--;
            }
        });
        updatedTraining.exercise[indexExercise].total = newTotal;
        this.saveTrainingData({ ...updatedTraining } as NewTraining);
    }

    pushToAvailableExercises(
        currentTrainingState: NewTraining,
        toBeAddedExercise: Exercise[],
    ): void {
        const updatedTraining: NewTraining = { ...currentTrainingState };
        updatedTraining.exercise.map((exercise: SingleExercise) => {
            const isDeletedExerciseInAE: Exercise = exercise.availableExercises.find((exercise: Exercise) => exercise._id === toBeAddedExercise[0]._id);
            if(!isDeletedExerciseInAE){
                exercise.availableExercises.push(toBeAddedExercise[0] as Exercise);
                exercise.availableExercises.sort(this.compare);
            }
        });
        this.saveTrainingData({ ...updatedTraining } as NewTraining);
    }

    deleteExercise(
        deletedIndex: number,
        currentTrainingState: NewTraining,
        deletedExerciseName?: string,
    ): Observable<[NewTraining, Exercise[]]> {
        const updatedTraining: NewTraining = { ...currentTrainingState };
        updatedTraining.exercise = updatedTraining.exercise
            .filter((exercise: SingleExercise) => exercise.formArrayIndex !== deletedIndex)
            .map((exercise: SingleExercise) => {
                if(exercise.formArrayIndex > deletedIndex){
                    exercise.formArrayIndex--;
                }
                return exercise;
            });
        if(deletedExerciseName){
            return this.allExercisesChanged$.pipe(
                take(1),
                map((allExercises: Exercise[]) =>
                    [
                        updatedTraining,
                        allExercises.filter(exercise => exercise.name === deletedExerciseName),
                    ],
                ),
            );
        }
        else{
            this.saveTrainingData({ ...updatedTraining } as NewTraining);
            return of([
                updatedTraining,
                null,
            ]);
        }
    }

    setsChanged(trainingData: SetTrainingData): void {
        const updatedTraining: NewTraining = { ...this.currentTrainingChanged$$.getValue() };
        const indexFoundSet = updatedTraining.exercise[trainingData.formArrayIndex].sets.findIndex(set => set.setNumber === trainingData.setNumber);

        if(indexFoundSet > -1){
            updatedTraining.exercise[trainingData.formArrayIndex].sets[indexFoundSet] = {
                ...updatedTraining.exercise[trainingData.formArrayIndex].sets[indexFoundSet],
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps,
            };
            updatedTraining.exercise[trainingData.formArrayIndex].total = trainingData.total;
        }
        else{
            updatedTraining.exercise[trainingData.formArrayIndex].sets.push({
                setNumber: trainingData.setNumber,
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps,
            });
            updatedTraining.exercise[trainingData.formArrayIndex].total = trainingData.total;
        }
        this.saveTrainingData({ ...updatedTraining } as NewTraining);
    }

    addNewExercise(
        alreadyUsedExercises: string[],
        nextFormArrayIndex: number,
    ): void {
        const allExercises: Exercise[] = [ ...this.allExercisesChanged$$.getValue() ];
        const availableExercises: Exercise[] = allExercises.filter((exercise: Exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1);
        this.updateTrainingState(
            availableExercises,
            nextFormArrayIndex,
        );
    }

    updateExerciseChoices(
        selectedExercise: string,
        selectedIndex: number,
        disabledTooltip: boolean,
    ): void {
        const updatedTraining: NewTraining = { ...this.currentTrainingChanged$$.getValue() };
        updatedTraining.exercise[selectedIndex].exerciseName = selectedExercise;
        updatedTraining.exercise[selectedIndex].disabledTooltip = disabledTooltip;
        updatedTraining.exercise.forEach((exercise: SingleExercise, index: number) => {
            if(index !== selectedIndex){
                exercise.availableExercises = exercise.availableExercises.filter((exercise: Exercise) => exercise.name !== selectedExercise);
            }
        });
        this.saveTrainingData({ ...updatedTraining } as NewTraining);
    }

    keepTrainingState(): void {
        const trainingState: NewTraining = JSON.parse(localStorage.getItem('trainingState'));
        const allExercises: Exercise[] = JSON.parse(localStorage.getItem('allExercises'));

        if(!trainingState || !allExercises){
            return;
        }
        this.currentTrainingChanged$$.next({ ...trainingState });
        this.allExercisesChanged$$.next([ ...allExercises ]);
    }

    updateTrainingState(
        exercises: Exercise[],
        nextFormArrayIndex: number,
        restartAll?: boolean,
        userId?: string,
    ): void {
        let updatedTraining: NewTraining = { ...this.currentTrainingChanged$$.getValue() };
        if(restartAll){
            updatedTraining = {
                ...EMPTY_TRAINING,
                userId: userId,
            };
        }
        updatedTraining.exercise.push(
            this.returnEmptyExercise(
                exercises,
                nextFormArrayIndex,
            ),
        );
        this.saveTrainingData({ ...updatedTraining } as NewTraining);
    }

    returnEmptyExercise(
        exercises: Exercise[],
        nextFormArrayIndex: number,
    ): SingleExercise {
        return {
            formArrayIndex: nextFormArrayIndex,
            exerciseName: null,
            sets: createInitialSet(),
            total: null,
            disabledTooltip: true,
            availableExercises: [ ...exercises ],
        } as SingleExercise;
    }

    private saveTrainingData(updatedTraining: NewTraining): void {
        this.currentTrainingChanged$$.next({ ...updatedTraining });
        localStorage.setItem('trainingState', JSON.stringify({ ...updatedTraining }));
    }

    updateTrainingData(editTraining: NewTraining): void {
        this.saveTrainingData({ ...editTraining });
    }

    clearTrainingData(): void {
        this.saveTrainingData({ ...EMPTY_TRAINING });
    }

    private compare(
        a: Exercise,
        b: Exercise,
    ): number {
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0;
    }
}
