import { Injectable, OnDestroy } from "@angular/core";
import { environment } from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { map, take, tap } from "rxjs/operators";
import { BehaviorSubject, Observable, of, Subject} from "rxjs";
import { Exercise } from "../../models/training/exercise.model";
import { NewTraining, SingleExercise } from "../../models/training/new-training.model";
import { GeneralResponseData } from "../../models/general-response.model";
@Injectable({
    providedIn: 'root'
})
export class NewTrainingService implements OnDestroy {

    //Kontroliram pretplatu
    private readonly subs$$ = new Subject<void>();

    //Kreiram Subject u kojega spremam trenutni index vježbe i seta
    indexChanged$$ = new Subject<{
        indexExercise: number,
        indexSet: number
    }>();

    //Subject koji sadrži sve registrirane vježbe
    private allExercisesChanged$$ = new BehaviorSubject<Exercise[]>([]);
    //Observable koji sadrži sve registrirane vježbe
    allExercisesChanged$: Observable<Exercise[]> = this.allExercisesChanged$$.asObservable();

    /*************************************************** */
    //Spremam trenutno stanje treninga kojega stavljam u Subject
    private currentTrainingState: NewTraining = {
        exercise: [],
        _id: '',
        bodyweight: null,
        editMode: false
    };
    //Kreiram Subject koji čuva stanje trenutnog treninga
    private currentTrainingChanged$$ = new BehaviorSubject<NewTraining>({
        exercise: [],
        _id: '',
        bodyweight: null,
        editMode: false
    });
    //Observable koji sadrži trenutno stanje treninga
    currentTrainingChanged$: Observable<NewTraining> = this.currentTrainingChanged$$.asObservable();
    /*************************************************** */

    constructor(
        private readonly http: HttpClient
    ){}

    /*************************************
    BACKEND */
    //Metoda koja dohvaća vježbe
    getExercises()
        : Observable<Exercise[]> {
        return this.http.get<Exercise[]>(environment.backend + '/getExercises').pipe(
            tap((exercises: Exercise[]) => {
                //Dohvaćam 'trainingState' iz LS
                const trainingState: NewTraining = JSON.parse(localStorage.getItem('trainingState'));
                //Samo ako nema 'trainingState' u LS
                if(!trainingState){
                    //Inicijalno stvaram prazni objekt
                    this.updateTrainingState(
                        exercises,
                        0,
                        true
                    );
                    //U BS stavljam SVE DOHVAĆENE VJEŽBE
                    this.allExercisesChanged$$.next(exercises);
                    //U LS stavljam SVE DOHVAĆENE VJEŽBE
                    localStorage.setItem('allExercises', JSON.stringify(exercises));
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
        this.currentTrainingState.bodyweight = +value;
        this.saveData();
    }

    //Metoda koja briše set određene vježbe iz centralnog polja, ažurira stanje Subjecta i LS-a
    deleteSet(
        indexExercise: number,
        indexSet: number,
        newTotal: number
    ): void {
        //Brišem set iz centralnog polja
        this.currentTrainingState.exercise[indexExercise].sets.splice(indexSet, 1);
        this.currentTrainingState.exercise[indexExercise].total = newTotal;
        this.saveData();
    }

    //Metoda koja dodava izbrisanu vježbu u ostale selectove
    pushToAvailableExercises(toBeAddedExercise: Exercise[])
        : void {
        //Prolazim kroz sve vježbe
        this.currentTrainingState.exercise.forEach((exercise) => {
            if(!exercise.availableExercises.includes(toBeAddedExercise[0])){
                exercise.availableExercises.push(toBeAddedExercise[0]);
                exercise.availableExercises.sort(this.compare);
            }
        });
        this.saveData();
    }

    //Metoda koja briše vježbu iz centralnog polja
    deleteExercise(
        deletedIndex: number,
        deletedExercise?: string
    ): Observable<Exercise[]> {
        //Brišem izbrisanu vježbu iz arraya
        this.currentTrainingState.exercise = this.currentTrainingState.exercise.filter(exercise => exercise.formArrayIndex !== deletedIndex);
        //Prolazim kroz sve vježbe te ako su bile POVIŠE izbrisane, dekrementiram im index
        this.currentTrainingState.exercise.forEach((exercise) => {
            if(exercise.formArrayIndex > deletedIndex){
                exercise.formArrayIndex--;
            }
        });
        //Ako je naziv vježbe bio popunjen prilikom brisanja
        if(deletedExercise){
            //Dohvaćam cijeli objekt izbrisane vježbe da ga mogu dodati u ostale vježbe (selectove)
            return this.allExercisesChanged$.pipe(
                take(1),
                map((allExercises: Exercise[]) => {
                    return allExercises.filter(exercise => exercise.name === deletedExercise);
                })
            );
        }
        //Ako naziv vježbe NIJE BIO popunjen prilikom brisanja
        else{
            return of(null).pipe(
                tap(() => this.saveData())
            );
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
        //Gledam postoji li broj trenutno dodanog seta u polju 'sets'
        const indexFoundSet = this.currentTrainingState.exercise[trainingData.formArrayIndex].sets.findIndex(set => set.setNumber === trainingData.setNumber);
        //Ako sam našao isti broj seta (ažuriram na tom indexu)
        if(indexFoundSet > -1){
            //Ažuriram set na tom broju
            this.currentTrainingState.exercise[trainingData.formArrayIndex].sets[indexFoundSet] = {
                ...this.currentTrainingState.exercise[trainingData.formArrayIndex].sets[indexFoundSet],
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps
            };
            //Ažuriram total
            this.currentTrainingState.exercise[trainingData.formArrayIndex].total = trainingData.total;
        }
        //Ako NISAM našao isti broj seta
        else{
            //Dodavam novi set u polje za tu vježbu
            this.currentTrainingState.exercise[trainingData.formArrayIndex].sets.push({
                setNumber: trainingData.setNumber,
                weightLifted: trainingData.weightLifted,
                reps: trainingData.reps
            });
            //Ažuriram total
            this.currentTrainingState.exercise[trainingData.formArrayIndex].total = trainingData.total;
        }
        this.saveData();
    }

    /************************************************************** */

    //Metoda koja nadodava novu vježbu
    addNewExercise(
        alreadyUsedExercises: string[],
        nextFormArrayIndex: number
    ): void {
        //Dohvaćam sve registrirane vježbe
        const allExercises: Exercise[] = JSON.parse(localStorage.getItem('allExercises'));
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
        this.currentTrainingState.exercise[selectedIndex].exerciseName = selectedExercise;
        //Prolazim kroz sve selectove te brišem iz njih vježbu koja je trenutno odabrana u nekom selectu
        this.currentTrainingState.exercise.forEach((exercise, index) => {
            //Ako je vježba različita od odabrane
            if(index !== selectedIndex){
                exercise.availableExercises = exercise.availableExercises.filter(exercise => exercise.name !== selectedExercise);
            }
        });
        this.saveData();
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
        //Spremam state iz LS u svoj objekt u servisu
        this.currentTrainingState = {...trainingState};
        //Proslijedi podatke Subjectu
        this.currentTrainingChanged$$.next({...trainingState});
        this.allExercisesChanged$$.next([...allExercises]);
    }

    //Metoda koja priprema centralni objekt pri inicijalizaciji
    updateTrainingState(
        exercises: Exercise[],
        nextFormArrayIndex: number,
        restartAll?: boolean
    ): void {
        if(restartAll){
            this.currentTrainingState = {
                exercise: [],
                _id: '',
                bodyweight: null,
                editMode: false
            };
        }
        //Ubacivam u centralno polje pripremljeni objekt
        this.currentTrainingState.exercise.push(
            this.returnEmptyExercise(
                exercises,
                nextFormArrayIndex
            )
        );
        this.saveData();
    }

    //Stvaram prazni objekt vježbe
    returnEmptyExercise(
        exercises: Exercise[],
        nextFormArrayIndex: number
    ): SingleExercise {
        const newAddedExercise: SingleExercise = {
            formArrayIndex: nextFormArrayIndex,
            exerciseName: null,
            sets: [],
            total: null,
            availableExercises: [...exercises]
        };
        return newAddedExercise as SingleExercise;
    }

    //Metoda koja sprema trenutno stanje polja
    saveData(editTraining?: NewTraining): void {
        if(editTraining){
            this.currentTrainingState = editTraining;
        }
        this.currentTrainingChanged$$.next({...this.currentTrainingState});
        localStorage.setItem('trainingState', JSON.stringify({...this.currentTrainingState}));
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

    //Metoda koja se poziva kada se komponenta uništi
    ngOnDestroy(): void {
        this.subs$$.next();
        this.subs$$.complete();
    }

}
