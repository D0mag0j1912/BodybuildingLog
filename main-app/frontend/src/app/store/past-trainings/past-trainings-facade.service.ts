import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../..';
import { selectPastTrainingsFilter } from './selectors/past-trainings.selectors';
import * as PastTrainingsActions from './actions/past-trainings.actions';

@Injectable({ providedIn: 'root' })
export class PastTrainingsFacadeService {
    private _selectPastTrainingsFilter = this._store.select(selectPastTrainingsFilter);

    constructor(private _store: Store<AppState>) {}

    //Selectors BEGIN -------------------------
    selectPastTrainingsFilter(): Observable<string> {
        return this._selectPastTrainingsFilter;
    }
    //Selectors END ---------------------------

    //Actions BEGIN ---------------------------
    saveFilter(filter: string): void {
        this._store.dispatch(PastTrainingsActions.saveFilter({ filter }));
    }
    //Actions END -----------------------------
}
