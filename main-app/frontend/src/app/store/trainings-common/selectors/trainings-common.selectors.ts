import { createSelector } from '@ngrx/store';
import {
    TrainingsState,
    selectTrainingsState,
} from '../../../views/training/training-store.module';
import { TrainingsCommonState } from '../reducers/trainings-common.reducers';

export const selectTrainingsCommonState = createSelector(
    selectTrainingsState,
    (state: TrainingsState) => state.trainingsCommon,
);

export const selectExercises = createSelector(
    selectTrainingsCommonState,
    (state: TrainingsCommonState) => state.exercises,
);
