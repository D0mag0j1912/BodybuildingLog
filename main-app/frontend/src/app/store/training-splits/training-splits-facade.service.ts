import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../..';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import { StreamData } from '../../models/common/common.model';
import * as trainingSplitActions from './training-splits.actions';
import { selectTrainingSplitList } from './training-splits.selectors';

@Injectable()
export class TrainingSplitsFacadeService {
    private _selectTrainingSplitList$ = this._store.select(selectTrainingSplitList);

    constructor(private _store: Store<AppState>) {}

    getTrainingSplitListSelector(): Observable<StreamData<TrainingSplit[]>> {
        return this._selectTrainingSplitList$;
    }

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

    getTrainingSplitList(): void {
        this._store.dispatch(trainingSplitActions.getTrainingSplitList());
    }
}
