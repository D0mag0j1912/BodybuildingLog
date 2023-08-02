import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PastTrainingsState } from '../reducers/past-trainings.reducer';
import { FeatureKeys } from '../../../constants/enums/feature-keys.enum';

/**
 * Get training split state
 */
export const pastTrainingsState = createFeatureSelector<PastTrainingsState>(
    FeatureKeys.PAST_TRAININGS,
);

/**
 * Get training split list state
 */

export const selectPastTrainingsFilter = createSelector(
    pastTrainingsState,
    (state: PastTrainingsState) => state.filter,
);
