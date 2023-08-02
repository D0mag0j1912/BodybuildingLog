import { createReducer, on } from '@ngrx/store';
import * as PastTrainingsActions from '../actions/past-trainings.actions';

export interface PastTrainingsState {
    filter: string;
}

export const initialPastTrainingsState: PastTrainingsState = {
    filter: undefined,
};

export const pastTrainingsReducer = createReducer(
    initialPastTrainingsState,
    on(PastTrainingsActions.saveFilter, (state, { filter }) => ({
        ...state,
        filter,
    })),
);
