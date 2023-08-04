import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../..';
import {
    PastTrainings,
    PeriodFilterType,
} from '../../models/training/past-trainings/past-trainings.model';
import { Paginator } from '../../models/common/paginator.model';
import { StreamData } from '../../models/common/common.model';
import {
    selectPastTrainings,
    selectPastTrainingsFilter,
} from './selectors/past-trainings.selectors';
import * as PastTrainingsActions from './actions/past-trainings.actions';

@Injectable({ providedIn: 'root' })
export class PastTrainingsFacadeService {
    private _selectPastTrainingsFilter = this._store.select(selectPastTrainingsFilter);

    private _selectPastTrainings = this._store.select(selectPastTrainings);

    constructor(private _store: Store<AppState>) {}

    //Selectors BEGIN -------------------------
    selectPastTrainings(): Observable<StreamData<Paginator<PastTrainings>>> {
        return this._selectPastTrainings;
    }

    selectPastTrainingsFilter(): Observable<string> {
        return this._selectPastTrainingsFilter;
    }
    //Selectors END ---------------------------

    //Actions BEGIN ---------------------------
    setLoading(loading: boolean): void {
        this._store.dispatch(PastTrainingsActions.setLoading({ loading }));
    }

    getPastTrainings(currentDate: string, periodFilterType: PeriodFilterType): void {
        this._store.dispatch(
            PastTrainingsActions.getPastTrainings({ currentDate, periodFilterType }),
        );
    }

    saveFilter(filter: string): void {
        this._store.dispatch(PastTrainingsActions.saveFilter({ filter }));
    }
    //Actions END -----------------------------
}
