import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../..';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import * as trainingSplitActions from './training-splits.actions';

@Injectable()
export class TrainingSplitsFacadeService {
    constructor(private _store: Store<AppState>) {}

    updateTrainingSplitForm(trainingSplitForm: TrainingSplit): void {
        this._store.dispatch(
            trainingSplitActions.updateTrainingSplitForm({
                trainingSplitForm,
            }),
        );
    }

    createTrainingSplit(trainingSplit: TrainingSplit): void {
        this._store.dispatch(trainingSplitActions.createTrainingSplit({ trainingSplit }));
    }
}
