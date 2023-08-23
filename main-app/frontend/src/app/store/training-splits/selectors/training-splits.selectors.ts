import { createSelector } from '@ngrx/store';
import { TrainingSplitsState } from '../reducers/training-splits.reducers';
import {
    TrainingsState,
    selectTrainingsState,
} from '../../../views/training/training-store.module';
/**
 * Get training split state
 */
export const trainingSplitsState = createSelector(
    selectTrainingsState,
    (state: TrainingsState) => state.trainingSplits,
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
