import { createReducer } from '@ngrx/store';
import { ExerciseDto as Exercise } from '../../../../api/models/exercise-dto';
import { StreamData } from '../../../models/common/common.model';

export interface TrainingsCommonState {
    exercises: StreamData<Exercise[]>;
}

export const initialTrainingsCommonState: TrainingsCommonState = {
    exercises: undefined,
};

export const trainingsCommonReducer = createReducer(initialTrainingsCommonState);
