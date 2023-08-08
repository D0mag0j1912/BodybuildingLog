import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PastTrainingsState } from '../reducers/past-trainings.reducer';
import { FeatureKeys } from '../../../constants/enums/feature-keys.enum';

/**
 * Get past trainings state
 */
export const pastTrainingsState = createFeatureSelector<PastTrainingsState>(
    FeatureKeys.PAST_TRAININGS,
);

/** Select past trainings */
export const selectPastTrainings = createSelector(
    pastTrainingsState,
    (state: PastTrainingsState) => state.pastTrainings,
);

/**
 * Select past trainings filters
 */
export const selectPastTrainingsFilter = createSelector(
    pastTrainingsState,
    (state: PastTrainingsState) => state?.filter,
);
