import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PastTrainingsFilterState } from '../reducers/past-trainings-filters.reducer';
import { FeatureKeys } from '../../../constants/enums/feature-keys.enum';

/**
 * Get training split state
 */
export const pastTrainingsFiltersState = createFeatureSelector<PastTrainingsFilterState>(
    FeatureKeys.PAST_TRAININGS_FILTERS,
);

/**
 * Get training split list state
 */

export const selectPastTrainingsFiltersFilter = createSelector(
    pastTrainingsFiltersState,
    (state: PastTrainingsFilterState) => state.filter,
);
