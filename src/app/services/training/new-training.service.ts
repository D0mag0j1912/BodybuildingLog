import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { map, switchMap, take, tap } from "rxjs/operators";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Exercise } from "../../models/training/exercise.model";
import { NewTraining, SingleExercise } from "../../models/training/new-training.model";
import { GeneralResponseData } from "../../models/general-response.model";
import { AuthService } from "../auth/auth.service";
import { AuthResponseData } from "src/app/models/auth/auth-data.model";

const EMPTY_TRAINING: NewTraining = {
    exercise: [],
    _id: '',
    bodyweight: null,
    editMode: false,
    userId: null
};

@Injectable({
    providedIn: 'root'
})
export class NewTrainingService {

    private readonly allExercisesChanged$$ = new BehaviorSubject<Exercise[]>([]);
    readonly allExercisesChanged$: Observable<Exercise[]> = this.allExercisesChanged$$.asObservable();

    private readonly currentTrainingChanged$$ = new BehaviorSubject<NewTraining>(EMPTY_TRAINING);
    readonly currentTrainingChanged$: Observable<NewTraining> = this.currentTrainingChanged$$.asObservable();

    constructor(
        private readonly http: HttpClient,
        private readonly authService: AuthService,
    ){}

    getExercises(): Observable<AuthResponseData> {
        return this.http.get<Exercise[]>(environment.backend + '/getExercises').pipe(
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
                                authResponseData._id
                            );
                            this.allExercisesChanged$$.next(exercises);
                            localStorage.setItem('allExercises', JSON.stringify(exercises));
                        })
                    );
                }
                else {
                    return of(null);
                }
            })
        );
    }

    addTraining(trainingData: NewTraining): Observable<GeneralResponseData> {
        return this.http.post<GeneralResponseData>(environment.backend + '/handleTraining', {
            trainingData: trainingData
        });
    }

    updateTraining(
        trainingData: NewTraining,
        trainingId: string
    ): Observable<GeneralResponseData> {
        return this.http.put<GeneralResponseData>(environment.backend + `/handleTraining/${trainingId}`, {
            updatedTrainingData: trainingData
        });
    }

    /**************************************** */

    addBodyweightToStorage(value: string): void {
        const updatedTraining: NewTraining = {
            ...this.currentTrainingChanged$$.getValue(),
            bodyweight: +value
        } as NewTraining;
        this.saveTrainingData(updatedTraining);
    }

    deleteSet(
        indexExercise: number,
        indexSet: number,
        newTotal: number
    ): void {
        const updatedTraining: NewTraining = { ...this.currentTrainingChanged$$.getValue() };
        updatedTraining.exercise[indexExercise].sets.splice(indexSet, 1);
        updatedTraining.exercise[indexExercise].total = newTotal;
        this.saveTrainingData(updatedTraining);
    }

    pushToAvailableExercises(
        currentTrainingState: NewTraining,
        toBeAddedExercise: Exercise[]
    ): void {
        const updatedTraining: NewTraining = { ...currentTrainingState };
        updatedTraining.exercise.map((exercise: SingleExercise) => {
            const isDeletedExerciseInAE: Exercise = exercise.availableExercises.find((exercise: Exercise) => exercise._id === toBeAddedExercise[0]._id);
            if(!isDeletedExerciseInAE){
                exercise.availableExercises.push(toBeAddedExercise[0]);
                exercise.availableExercises.sort(this.compare);
            }
        });
        this.saveTrainingData(updatedTraining);
    }

    deleteExercise(
        deletedIndex: number,
        currentTrainingState: NewTraining,
        deletedExerciseName?: string
    ): Observable<[NewTraining, Exercise[]]> {
        let updatedTraining: NewTraining = { ...currentTrainingState };
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
                map((allExercises: Exercise[]) => {
                    return [
                        updatedTraining,
                        allExercises.filter(exercise => exercise.name === deletedExerciseName)
                    ];
                })
            );
        }
        else{
            this.saveTrainingData(updatedTraining);
            return of([
                updatedTraining,
                null
            ]);
        }
    }

    setsChanged(trainingData: {
        formArrayIndex: number;
        exerciseName: string;
        setNumber: number;
        weightLifted: number;
        reps: number;
        total: number;
    }): void {
        const updatedTraining: NewTraining = { ...this.currentTrainingChanged$$.getValue() };
        const indexFoundSet = updatedTraining.exercise[trainingData.formArrayIndex].sets.findIndex(set => set.setNumber === trainingData.setNumber);

        if(indexFoundSet > -1){
            updatedTraining.exercise[trainingData.formArrayIndex].sets[indexFoundSet] = {
                ...updatedTraining.exercise[trainingData.formArrayIndex].sets[indexFoundSet],
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps
            };
            updatedTraining.exercise[trainingData.formArrayIndex].total = trainingData.total;
        }
        else{
            updatedTraining.exercise[trainingData.formArrayIndex].sets.push({
                setNumber: trainingData.setNumber,
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps
            });
            updatedTraining.exercise[trainingData.formArrayIndex].total = trainingData.total;
        }
        this.saveTrainingData(updatedTraining);
    }

    addNewExercise(
        alreadyUsedExercises: string[],
        nextFormArrayIndex: number
    ): void {
        const allExercises: Exercise[] = [ ...this.allExercisesChanged$$.getValue() ];
        const availableExercises: Exercise[] = allExercises.filter((exercise: Exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1);
        this.updateTrainingState(
            availableExercises,
            nextFormArrayIndex
        );
    }

    updateExerciseChoices(
        selectedExercise: string,
        selectedIndex: number,
        disabledTooltip: boolean
    ): void {
        const updatedTraining: NewTraining = { ...this.currentTrainingChanged$$.getValue() };
        updatedTraining.exercise[selectedIndex].exerciseName = selectedExercise;
        updatedTraining.exercise[selectedIndex].disabledTooltip = disabledTooltip;
        updatedTraining.exercise.forEach((exercise: SingleExercise, index: number) => {
            if(index !== selectedIndex){
                exercise.availableExercises = exercise.availableExercises.filter((exercise: Exercise) => exercise.name !== selectedExercise);
            }
        });
        this.saveTrainingData(updatedTraining);
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
        userId?: string
    ): void {
        let updatedTraining: NewTraining = { ...this.currentTrainingChanged$$.getValue() };
        if(restartAll){
            updatedTraining = {
                exercise: [],
                _id: '',
                bodyweight: null,
                editMode: false,
                userId: userId
            };
        }

        updatedTraining.exercise.push(
            this.returnEmptyExercise(
                exercises,
                nextFormArrayIndex
            )
        );
        this.saveTrainingData(updatedTraining);
    }

    returnEmptyExercise(
        exercises: Exercise[],
        nextFormArrayIndex: number
    ): SingleExercise {
        return {
            formArrayIndex: nextFormArrayIndex,
            exerciseName: null,
            sets: [],
            total: null,
            disabledTooltip: true,
            availableExercises: [ ...exercises ]
        } as SingleExercise;
    }

    saveTrainingData(updatedTraining: NewTraining): void {
        this.currentTrainingChanged$$.next({ ...updatedTraining });
        localStorage.setItem('trainingState', JSON.stringify({ ...updatedTraining }));
    }

    clearTrainingData(): void {
        this.saveTrainingData({ ...EMPTY_TRAINING });
    }

    private compare(
        a: Exercise,
        b: Exercise
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
