import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StreamData } from '../../models/common/interfaces/common.model';
import { Paginator } from '../../models/common/interfaces/paginator.model';
import { PastTrainings, PastTrainingsQueryParams } from '../../models/training/past-trainings/past-trainings.model';
import { LocalStorageItems } from '../../models/common/interfaces/common.model';

@Injectable({ providedIn: 'root' })
export class SharedService {

    private readonly editingTraining$$: Subject<boolean> = new Subject<boolean>();
    readonly editingTraining$: Observable<boolean> = this.editingTraining$$.asObservable();

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

    emitEditingTraining(editMode: boolean): void {
        this.editingTraining$$.next(editMode);
    }

    keepQueryParams(): void {
        const queryParams = JSON.parse(localStorage.getItem(LocalStorageItems.QUERY_PARAMS));
        if (!queryParams) {
            return;
        }
        this.pastTrainingsQueryParams$$.next(queryParams);
    }
}
