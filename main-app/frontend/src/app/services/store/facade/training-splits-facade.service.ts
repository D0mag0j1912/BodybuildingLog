import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../..';
import * as trainingSplitActions from '../../../store/training-splits/training-splits.actions';
import { TrainingSplitDto as TrainingSplit } from '../../../../api/models/training-split-dto';

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
}
