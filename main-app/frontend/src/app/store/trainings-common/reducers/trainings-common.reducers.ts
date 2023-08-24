import { createReducer, on } from '@ngrx/store';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';
import { StreamData } from '../../../models/common/common.model';
import * as TrainingsCommonActions from '../actions/trainings-common.actions';

export interface TrainingsCommonState {
    exercises: StreamData<Exercise[]>;
}

export const initialTrainingsCommonState: TrainingsCommonState = {
    exercises: undefined,
};

export const trainingsCommonReducer = createReducer(
    initialTrainingsCommonState,
    on(TrainingsCommonActions.setExercises, (state, { exercises }) => ({
        ...state,
        exercises,
    })),
);
