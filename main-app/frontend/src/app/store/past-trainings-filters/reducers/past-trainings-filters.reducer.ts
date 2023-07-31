import { createReducer, on } from '@ngrx/store';
import * as PastTrainingsFiltersActions from '../actions/past-trainings-filters.actions';

export interface PastTrainingsFilterState {
    filter: string;
}

export const initialPastTrainingsFilterState: PastTrainingsFilterState = {
    filter: undefined,
};

export const pastTrainingsFiltersReducer = createReducer(
    initialPastTrainingsFilterState,
    on(PastTrainingsFiltersActions.saveFilter, (state, { filter }) => ({
        ...state,
        filter,
    }))
);
