import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StreamData } from '../../models/common/interfaces/common.model';
import { Paginator } from '../../models/common/interfaces/paginator.model';
import { PastTrainings, PastTrainingsQueryParams } from '../../models/training/past-trainings/past-trainings.model';
import { LocalStorageItems } from '../../models/common/interfaces/common.model';

@Injectable({ providedIn: 'root' })
export class SharedService {

    readonly editingTraining$$: Subject<boolean> = new Subject<boolean>();

    readonly pastTrainingsQueryParams$$: BehaviorSubject<PastTrainingsQueryParams> = new BehaviorSubject<PastTrainingsQueryParams>(null);

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

    keepQueryParams(): void {
        const queryParams = JSON.parse(localStorage.getItem(LocalStorageItems.QUERY_PARAMS));
        if (!queryParams) {
            return;
        }
        this.pastTrainingsQueryParams$$.next(queryParams);
    }
}
