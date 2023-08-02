import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureKeys } from '../../../constants/enums/feature-keys.enum';
import { TrainingSplitsState } from '../reducers/training-splits.reducers';

/**
 * Get training split state
 */
export const trainingSplitsState = createFeatureSelector<TrainingSplitsState>(
    FeatureKeys.TRAINING_SPLITS,
);

/**
 * Get training split list state
 */
export const selectTrainingSplitList = createSelector(
    trainingSplitsState,
    (state: TrainingSplitsState) => state.trainingSplitList,
);

/**
 * Get active training split
 */
export const selectActiveTrainingSplit = createSelector(
    trainingSplitsState,
    (state: TrainingSplitsState) => state.activeTrainingSplit,
);
