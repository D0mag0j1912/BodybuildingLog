import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
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

    keepQueryParams(): Observable<boolean> {
        return from(Storage.get({ key: StorageItems.QUERY_PARAMS }))
            .pipe(
                map(storedData => {
                    if (!storedData || !storedData?.value) {
                        return false;
                    }
                    const queryParams = JSON.parse(storedData.value);
                    this._pastTrainingsQueryParams$$.next(queryParams);
                    return true;
                }),
            );
    }

    emitPastTrainingsQueryParams(params: PastTrainingsQueryParams): void {
        this._pastTrainingsQueryParams$$.next(params);
    }

}
