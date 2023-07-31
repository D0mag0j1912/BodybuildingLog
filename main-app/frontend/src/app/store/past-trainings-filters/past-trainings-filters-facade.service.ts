import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../..';
import { selectPastTrainingsFiltersFilter } from './selectors/past-trainings-filters.selectors';
import * as PastTrainingsFiltersActions from './actions/past-trainings-filters.actions';

@Injectable({ providedIn: 'root' })
export class PastTrainingsFiltersFacadeService {

    private _selectPastTrainingsFiltersFilter = this._store.select(selectPastTrainingsFiltersFilter);

    constructor(private _store: Store<AppState>) {}

    //Selectors BEGIN -------------------------
    selectPastTrainingsFiltersFilter(): Observable<string> {
        return this._selectPastTrainingsFiltersFilter;
    }
    //Selectors END ---------------------------

    //Actions BEGIN ---------------------------
    saveFilter(filter: string): void {
        this._store.dispatch(PastTrainingsFiltersActions.saveFilter({ filter }));
    }
    //Actions END -----------------------------
}
