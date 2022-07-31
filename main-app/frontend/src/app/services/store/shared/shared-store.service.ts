import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StreamData } from '../../../models/common/common.model';
import { Paginator } from '../../../models/common/paginator.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class SharedStoreService {

    private readonly _editingTraining$$: Subject<boolean> = new Subject<boolean>();
    readonly editingTraining$: Observable<boolean> = this._editingTraining$$.asObservable();

    readonly deletedTraining$$: Subject<StreamData<Paginator<PastTrainings>>> = new Subject<StreamData<Paginator<PastTrainings>>>();

    readonly dayClicked$$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    completeDayClicked(): void {
        this.dayClicked$$.complete();
    }

    emitDayClicked(dayClicked: string): void {
        this.dayClicked$$.next(dayClicked);
    }

    getDayClickedDate(): string | undefined {
        return this.dayClicked$$.getValue();
    }

    emitEditingTraining(editMode: boolean): void {
        this._editingTraining$$.next(editMode);
    }

}
