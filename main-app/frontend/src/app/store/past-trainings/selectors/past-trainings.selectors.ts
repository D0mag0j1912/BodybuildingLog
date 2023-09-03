import { createSelector } from '@ngrx/store';
import { PastTrainingsState } from '../reducers/past-trainings.reducer';
import {
    TrainingsState,
    selectTrainingsState,
} from '../../../views/training/training-store.module';

/**
 * Get past trainings state
 */
export const pastTrainingsState = createSelector(
    selectTrainingsState,
    (state: TrainingsState) => state.pastTrainings,
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

export const selectIsLoading = createSelector(
    pastTrainingsState,
    (state: PastTrainingsState) => state.isLoading,
);
