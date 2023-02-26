import { createReducer } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';

export interface TrainingSplitsState {
    trainingSplits: TrainingSplit[];
}

export const initialTrainingSplitState: TrainingSplitsState = {
    trainingSplits: undefined,
};

export const trainingSplitsReducers = createReducer(initialTrainingSplitState);
