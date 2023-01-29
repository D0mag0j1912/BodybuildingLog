import { ActionReducerMap } from '@ngrx/store';
import { TrainingSplitsState } from './store/training-splits/training-splits-index';

export interface AppState {
    trainingSplits?: TrainingSplitsState;
}

export const reducers: ActionReducerMap<AppState> = {};
