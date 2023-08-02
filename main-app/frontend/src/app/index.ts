import { ActionReducerMap } from '@ngrx/store';
import { TrainingSplitsState } from './store/training-splits/reducers/training-splits.reducers';
import { FeatureKeys } from './constants/enums/feature-keys.enum';
import { PastTrainingsState } from './store/past-trainings/reducers/past-trainings.reducer';

export interface AppState {
    [FeatureKeys.TRAINING_SPLITS]: TrainingSplitsState;
    [FeatureKeys.PAST_TRAININGS]: PastTrainingsState;
}

export const reducers: ActionReducerMap<AppState> = {
    trainingSplits: undefined,
    pastTrainings: undefined,
};
