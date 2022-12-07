import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StreamData } from '../../../models/common/common.model';
import { Paginator } from '../../../models/common/paginator.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class SharedStoreService {
    private _editingTraining$ = new Subject<boolean>();
    editingTraining$ = this._editingTraining$.asObservable();

    deletedTraining$$ = new Subject<StreamData<Paginator<PastTrainings>>>();

    _dayClicked$ = new BehaviorSubject<string>(null);

    completeDayClicked(): void {
        this._dayClicked$.complete();
    }

    emitDayClicked(dayClicked: string): void {
        this._dayClicked$.next(dayClicked);
    }

    getDayClickedDate(): string | undefined {
        return this._dayClicked$.getValue();
    }

    emitEditingTraining(editMode: boolean): void {
        this._editingTraining$.next(editMode);
    }
}
