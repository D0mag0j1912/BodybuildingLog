import { ActionReducerMap } from '@ngrx/store';
import { TrainingSplitsState } from './store/training-splits/training-splits.reducers';
import { FeatureKeys } from './constants/enums/feature-keys.enum';

export interface AppState {
    [FeatureKeys.TRAINING_SPLITS]: TrainingSplitsState;
}

export const reducers: ActionReducerMap<AppState> = {
    trainingSplits: undefined,
};
