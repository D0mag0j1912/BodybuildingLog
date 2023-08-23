import { ToastOptions } from '@ionic/angular';
import { createAction, props } from '@ngrx/store';
import { StreamData } from '../../../models/common/common.model';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';

export const showToastMessage = createAction(
    '[Common] Show toast message',
    props<{ color: ToastOptions['color']; message: string }>(),
);

/** Get exercises */
export const getExercises = createAction('[Common] Get exercises');

export const setExercises = createAction(
    '[Common] Set exercises',
    props<{ exercises: StreamData<Exercise[]> }>(),
);
