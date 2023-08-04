import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StreamData } from '../../../models/common/common.model';
import { Paginator } from '../../../models/common/paginator.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class SharedStoreService {
    private _trainingDeleted$ = new Subject<StreamData<Paginator<PastTrainings>>>();
    trainingDeleted$ = this._trainingDeleted$.asObservable();

    _dayClicked$ = new BehaviorSubject<string>(null);

    emitTrainingDeletion(response: StreamData<Paginator<PastTrainings>>): void {
        this._trainingDeleted$.next(response);
    }

    completeDayClicked(): void {
        this._dayClicked$.complete();
    }

    emitDayClicked(dayClicked: string): void {
        this._dayClicked$.next(dayClicked);
    }

    getDayClickedDate(): string | undefined {
        return this._dayClicked$.getValue();
    }
}
