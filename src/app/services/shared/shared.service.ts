import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class SharedService {

    editingTraining$$: Subject<boolean> = new Subject<boolean>();
    editingTraining$: Observable<boolean> = this.editingTraining$$.asObservable();

    pastTrainingId$$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    //Metoda koja oduzima 2 sata na datum i vrijeme iz backenda
    subtractTwoHours(backendDate: Date): Date {
        return new Date(new Date(backendDate).setHours(new Date(backendDate).getHours() - 2));
    }
}
