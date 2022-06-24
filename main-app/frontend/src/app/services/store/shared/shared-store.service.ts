import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StorageItems, StreamData } from '../../../models/common/interfaces/common.model';
import { Paginator } from '../../../models/common/interfaces/paginator.model';
import { PastTrainings, PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';

@Injectable({ providedIn: 'root' })
export class SharedStoreService {

    private readonly _pastTrainingsQueryParams$$: BehaviorSubject<PastTrainingsQueryParams> = new BehaviorSubject<PastTrainingsQueryParams>(null);
    readonly pastTrainingsQueryParams$: Observable<PastTrainingsQueryParams> = this._pastTrainingsQueryParams$$.asObservable();

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

    keepQueryParams(): void {
        const queryParams = JSON.parse(localStorage.getItem(StorageItems.QUERY_PARAMS));
        if (!queryParams) {
            return;
        }
        this._pastTrainingsQueryParams$$.next(queryParams);
    }

    emitPastTrainingsQueryParams(params: PastTrainingsQueryParams): void {
        this._pastTrainingsQueryParams$$.next(params);
    }

}
