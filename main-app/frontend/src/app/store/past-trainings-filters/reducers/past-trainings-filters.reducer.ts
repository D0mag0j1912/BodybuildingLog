import { createReducer, on } from '@ngrx/store';

export interface PastTrainingsFilterState {
    filter: string;
}

export const initialPastTrainingsFilterState: PastTrainingsFilterState = {
    filter: undefined,
};

export const pastTrainingsFiltersReducer = createReducer(on(undefined));
