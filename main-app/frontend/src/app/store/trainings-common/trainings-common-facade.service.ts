import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrainingsState } from '../../views/training/training-store.module';
import * as TrainingsCommonActions from '../trainings-common/actions/trainings-common.actions';

@Injectable({ providedIn: 'root' })
export class TrainingsCommonFacadeService {
    constructor(private _store: Store<TrainingsState>) {}

    //Actions BEGIN ---------------------------
    getExercises(): void {
        this._store.dispatch(TrainingsCommonActions.getExercises());
    }
    //Actions END ---------------------------
}