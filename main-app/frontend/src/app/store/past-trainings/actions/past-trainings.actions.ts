import { createAction, props } from '@ngrx/store';

export const saveFilter = createAction('[Past trainings] Save filter', props<{ filter: string }>());
