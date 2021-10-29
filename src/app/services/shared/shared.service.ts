import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SharedService {

    readonly editingTraining$$: Subject<boolean> = new Subject<boolean>();
    readonly editingTraining$: Observable<boolean> = this.editingTraining$$.asObservable();

    readonly pastTrainingId$$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    subtractTwoHours(backendDate: Date): Date {
        return new Date(new Date(backendDate).setHours(new Date(backendDate).getHours() - 2));
    }
}
