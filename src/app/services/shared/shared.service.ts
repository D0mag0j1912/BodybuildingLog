import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class SharedService {

    readonly editingTraining$$: Subject<boolean> = new Subject<boolean>();

    readonly pastTrainingId$$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    readonly deletedTraining$$: Subject<PastTrainingsResponse> = new Subject<PastTrainingsResponse>();

    private readonly isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

    setLoading(isLoading: boolean): void {
        this.isLoading$$.next(isLoading);
    }

    subtractTwoHours(date: Date): Date {
        return new Date(new Date(date).setHours(new Date(date).getHours() - 2));
    }
}
