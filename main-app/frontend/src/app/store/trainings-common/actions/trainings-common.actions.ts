import { createAction, props } from '@ngrx/store';
import { StreamData } from '../../../models/common/common.model';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';

/** Get exercises */
export const getExercises = createAction('[Trainings common] Get exercises');

export const setExercises = createAction(
    '[Trainings common] Set exercises',
    props<{ exercises: StreamData<Exercise[]> }>(),
);
