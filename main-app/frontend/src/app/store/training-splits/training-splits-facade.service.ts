import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../..';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import { StreamData } from '../../models/common/common.model';
import { PreferencesDto as Preferences } from '../../../api/models/preferences-dto';
import { PreferenceChangedType } from '../../models/common/preferences.type';
import { NewTrainingDto as NewTraining } from '../../../api/models/new-training-dto';
import * as TrainingSplitActions from './training-splits.actions';
import { selectActiveTrainingSplit, selectTrainingSplitList } from './training-splits.selectors';

@Injectable()
export class TrainingSplitsFacadeService {
    private _selectTrainingSplitList$ = this._store.select(selectTrainingSplitList);

    private _selectActiveTrainingSplit$ = this._store.select(selectActiveTrainingSplit);

    constructor(private _store: Store<AppState>) {}

    //Selectors BEGIN -------------------------
    selectTrainingSplitList(): Observable<StreamData<TrainingSplit[]>> {
        return this._selectTrainingSplitList$;
    }

    selectActiveTrainingSplit(): Observable<TrainingSplit> {
        return this._selectActiveTrainingSplit$;
    }
    //Selectors END --------------------------

    //Actions BEGIN --------------------------
    updateTrainingSplitForm(trainingSplitForm: TrainingSplit): void {
        this._store.dispatch(
            TrainingSplitActions.updateTrainingSplitForm({
                trainingSplitForm,
            }),
        );
    }

    createTrainingSplit(trainingSplit: TrainingSplit): void {
        this._store.dispatch(TrainingSplitActions.createTrainingSplit({ trainingSplit }));
    }

    editTrainingSplit(id: string, trainingSplit: TrainingSplit, trainingState?: NewTraining): void {
        this._store.dispatch(
            TrainingSplitActions.editTrainingSplit({
                id,
                trainingSplit,
                trainingState,
            }),
        );
    }

    deleteTrainingSplit(id: string): void {
        this._store.dispatch(TrainingSplitActions.deleteTrainingSplit({ trainingSplitId: id }));
    }

    getTrainingSplitList(): void {
        this._store.dispatch(TrainingSplitActions.getTrainingSplitList());
    }

    searchTrainingSplits(contains: string): void {
        this._store.dispatch(TrainingSplitActions.searchTrainingSplits({ contains }));
    }

    getTrainingSplit(trainingSplitId: string): void {
        this._store.dispatch(TrainingSplitActions.getTrainingSplit({ trainingSplitId }));
    }

    setTrainingSplitAsActive(
        preferences: Preferences,
        preferenceChangedType: PreferenceChangedType,
        activeTrainingSplit: TrainingSplit,
    ): void {
        this._store.dispatch(
            TrainingSplitActions.setTrainingSplitAsActive({
                preferences,
                preferenceChangedType,
                activeTrainingSplit,
            }),
        );
    }
    //Actions END --------------------------
}
