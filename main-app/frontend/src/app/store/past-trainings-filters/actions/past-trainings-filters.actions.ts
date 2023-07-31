import { createAction, props } from '@ngrx/store';

export const saveFilter = createAction(
    '[Past trainings filters] Save filter',
    props<{ filter: string }>(),
);
