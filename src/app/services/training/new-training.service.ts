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
@Injectable({
    providedIn: 'root'
})
export class NewTrainingService {

    //Subject koji sadrži sve registrirane vježbe
    private readonly allExercisesChanged$$ = new BehaviorSubject<Exercise[]>([]);
    //Observable koji sadrži sve registrirane vježbe
    readonly allExercisesChanged$: Observable<Exercise[]> = this.allExercisesChanged$$.asObservable();

    /*************************************************** */
    //Spremam trenutno stanje treninga kojega stavljam u Subject

    private readonly currentTrainingChanged$$ = new BehaviorSubject<NewTraining>({
        exercise: [],
        _id: '',
        bodyweight: null,
        editMode: false,
        userId: null
    });
    readonly currentTrainingChanged$: Observable<NewTraining> = this.currentTrainingChanged$$.asObservable();
    /*************************************************** */

    constructor(
        private readonly http: HttpClient,
        private readonly authService: AuthService
    ){}

    /*************************************
    BACKEND */
    //Metoda koja dohvaća vježbe
    getExercises(): Observable<AuthResponseData> {
        return this.http.get<Exercise[]>(environment.backend + '/getExercises').pipe(
            switchMap((exercises: Exercise[]) => {
                //Dohvaćam 'trainingState' iz LS
                const trainingState: NewTraining = JSON.parse(localStorage.getItem('trainingState'));
                //Samo ako nema 'trainingState' u LS (znači user se sada ulogirao)
                if(!trainingState){
                    return this.authService.loggedUser$.pipe(
                        take(1),
                        tap((authResponseData: AuthResponseData) => {
                            //Inicijalno stvaram prazni objekt
                            this.updateTrainingState(
                                exercises,
                                0,
                                true,
                                authResponseData._id
                            );
                            //U BS stavljam SVE DOHVAĆENE VJEŽBE
                            this.allExercisesChanged$$.next(exercises);
                            //U LS stavljam SVE DOHVAĆENE VJEŽBE
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

    //Metoda koja šalje uneseni trening backendu
    addTraining(trainingData: NewTraining)
        : Observable<GeneralResponseData> {
        return this.http.post<GeneralResponseData>(environment.backend + '/handleTraining', {
            trainingData: trainingData
        });
    }

    updateTraining(
        trainingData: NewTraining,
        trainingId: string)
        : Observable<GeneralResponseData> {
        return this.http.put<GeneralResponseData>(environment.backend + `/handleTraining/${trainingId}`, {
            updatedTrainingData: trainingData
        });
    }

    /**************************************** */

    //Metoda koja dodava novu vrijednost tjelesne težine u centralni objekt
    addBodyweightToStorage(value: string): void {
        const updatedTraining: NewTraining = {
            ...this.currentTrainingChanged$$.getValue(),
            bodyweight: +value
        } as NewTraining;
        this.saveData(updatedTraining);
    }

    //Metoda koja briše set određene vježbe iz centralnog polja, ažurira stanje Subjecta i LS-a
    deleteSet(
        indexExercise: number,
        indexSet: number,
        newTotal: number
    ): void {
        const updatedTraining: NewTraining = {...this.currentTrainingChanged$$.getValue()};
        updatedTraining.exercise[indexExercise].sets.splice(indexSet, 1);
        updatedTraining.exercise[indexExercise].total = newTotal;
        this.saveData(updatedTraining);
    }

    //Metoda koja dodava izbrisanu vježbu u ostale selectove
    pushToAvailableExercises(
        currentTrainingState: NewTraining,
        toBeAddedExercise: Exercise[]
    ): void {
        const updatedTraining: NewTraining = {...currentTrainingState};
        updatedTraining.exercise.map((exercise: SingleExercise) => {
            const isDeletedExerciseInAE: Exercise = exercise.availableExercises.find((exercise: Exercise) => exercise._id === toBeAddedExercise[0]._id);
            if(!isDeletedExerciseInAE){
                exercise.availableExercises.push(toBeAddedExercise[0]);
                exercise.availableExercises.sort(this.compare);
            }
        });
        this.saveData(updatedTraining);
    }

    //Metoda koja briše vježbu iz centralnog polja
    deleteExercise(
        deletedIndex: number,
        currentTrainingState: NewTraining,
        deletedExerciseName?: string
    ): Observable<[NewTraining, Exercise[]]> {
        let updatedTraining: NewTraining = {...currentTrainingState};
        //Brišem izbrisanu vježbu iz arraya
        updatedTraining.exercise = updatedTraining.exercise
            .filter((exercise: SingleExercise) => exercise.formArrayIndex !== deletedIndex)
            .map((exercise: SingleExercise) => {
                if(exercise.formArrayIndex > deletedIndex){
                    exercise.formArrayIndex--;
                }
                return exercise;
            });
        //Ako je naziv vježbe bio popunjen prilikom brisanja
        if(deletedExerciseName){
            //Dohvaćam cijeli objekt izbrisane vježbe da ga mogu dodati u ostale vježbe (selectove)
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
        //Ako naziv vježbe NIJE BIO popunjen prilikom brisanja
        else{
            this.saveData(updatedTraining);
            return of([
                updatedTraining,
                null
            ]);
        }
    }

    //Metoda koja ažurira stanje polja koje prati trenutno stanje treninga
    setsChanged(trainingData: {
        formArrayIndex: number;
        exerciseName: string;
        setNumber: number;
        weightLifted: number;
        reps: number;
        total: number;
    }): void {
        const updatedTraining: NewTraining = {...this.currentTrainingChanged$$.getValue()};
        //Gledam postoji li broj trenutno dodanog seta u polju 'sets'
        const indexFoundSet = updatedTraining.exercise[trainingData.formArrayIndex].sets.findIndex(set => set.setNumber === trainingData.setNumber);
        //Ako sam našao isti broj seta (ažuriram na tom indexu)
        if(indexFoundSet > -1){
            //Ažuriram set na tom broju
            updatedTraining.exercise[trainingData.formArrayIndex].sets[indexFoundSet] = {
                ...updatedTraining.exercise[trainingData.formArrayIndex].sets[indexFoundSet],
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps
            };
            //Ažuriram total
            updatedTraining.exercise[trainingData.formArrayIndex].total = trainingData.total;
        }
        //Ako NISAM našao isti broj seta
        else{
            //Dodavam novi set u polje za tu vježbu
            updatedTraining.exercise[trainingData.formArrayIndex].sets.push({
                setNumber: trainingData.setNumber,
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps
            });
            //Ažuriram total
            updatedTraining.exercise[trainingData.formArrayIndex].total = trainingData.total;
        }
        this.saveData(updatedTraining);
    }

    /************************************************************** */

    //Metoda koja nadodava novu vježbu
    addNewExercise(
        alreadyUsedExercises: string[],
        nextFormArrayIndex: number
    ): void {
        //Dohvaćam sve registrirane vježbe
        const allExercises: Exercise[] = [...this.allExercisesChanged$$.getValue()];
        //Dohvaćam raspoložive vježbe za novo dodani select
        const availableExercises: Exercise[] = allExercises.filter((exercise: Exercise) => alreadyUsedExercises.indexOf(exercise.name) === -1);
        //Punim polje i Subject
        this.updateTrainingState(
            availableExercises,
            nextFormArrayIndex
        );
    }

    //Metoda koja ažurira raspoložive vježbe u drugim selectovima kada korisnik ODABERE ILI IZBRIŠE vježbu iz nekog selecta
    updateExerciseChoices(
        selectedExercise: string,
        selectedIndex: number): void {
        const updatedTraining: NewTraining = {...this.currentTrainingChanged$$.getValue()};
        updatedTraining.exercise[selectedIndex].exerciseName = selectedExercise;
        //Prolazim kroz sve selectove te brišem iz njih vježbu koja je trenutno odabrana u nekom selectu
        updatedTraining.exercise.forEach((exercise: SingleExercise, index: number) => {
            //Ako je vježba različita od odabrane
            if(index !== selectedIndex){
                exercise.availableExercises = exercise.availableExercises.filter((exercise: Exercise) => exercise.name !== selectedExercise);
            }
        });
        this.saveData(updatedTraining);
    }

    //Metoda koja čuva trening stanje
    keepTrainingState(): void {
        //Dohvaćam podatke iz LS
        const trainingState: NewTraining = JSON.parse(localStorage.getItem('trainingState'));
        const allExercises: Exercise[] = JSON.parse(localStorage.getItem('allExercises'));
        //Ako ih nema
        if(!trainingState || !allExercises){
            return;
        }
        //Proslijedi podatke Subjectu
        this.currentTrainingChanged$$.next({...trainingState});
        this.allExercisesChanged$$.next([...allExercises]);
    }

    //Metoda koja priprema centralni objekt pri inicijalizaciji
    updateTrainingState(
        exercises: Exercise[],
        nextFormArrayIndex: number,
        restartAll?: boolean,
        userId?: string
    ): void {
        let updatedTraining: NewTraining = {...this.currentTrainingChanged$$.getValue()};
        if(restartAll){
            updatedTraining = {
                exercise: [],
                _id: '',
                bodyweight: null,
                editMode: false,
                //Ovdje treba postaviti ID ulogiranog usera
                userId: userId
            };
        }
        //Ubacivam u centralno polje pripremljeni objekt
        updatedTraining.exercise.push(
            this.returnEmptyExercise(
                exercises,
                nextFormArrayIndex
            )
        );
        this.saveData(updatedTraining);
    }

    //Stvaram prazni objekt vježbe
    returnEmptyExercise(
        exercises: Exercise[],
        nextFormArrayIndex: number
    ): SingleExercise {
        return {
            formArrayIndex: nextFormArrayIndex,
            exerciseName: null,
            sets: [],
            total: null,
            availableExercises: [...exercises]
        } as SingleExercise;
    }

    //Metoda koja sprema trenutno stanje polja
    saveData(updatedTraining?: NewTraining): void {
        this.currentTrainingChanged$$.next({...updatedTraining});
        localStorage.setItem('trainingState', JSON.stringify({...updatedTraining}));
    }

    //Metoda koja sortira polje vježbi koje se nalaze u selectovima
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
