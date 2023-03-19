import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureKeys } from '../../constants/enums/feature-keys.enum';
import { TrainingSplitsState } from './training-splits.reducers';

export const trainingSplits = createFeatureSelector<TrainingSplitsState>(
    FeatureKeys.TRAINING_SPLITS,
);

export const selectTrainingSplitList = createSelector(
    trainingSplits,
    (state) => state.trainingSplitList,
);
