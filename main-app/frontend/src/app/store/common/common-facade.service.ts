import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrainingsState } from '../../views/training/training-store.module';
import * as CommonActions from './actions/common.actions';

@Injectable({ providedIn: 'root' })
export class CommonFacadeService {
    constructor(private _store: Store<TrainingsState>) {}

    //Actions BEGIN ---------------------------
    getExercises(): void {
        this._store.dispatch(CommonActions.getExercises());
    }
    //Actions END ---------------------------
}
