import { createReducer, on } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import * as trainingSplitActions from './training-splits.actions';

export interface TrainingSplitsState {
    trainingSplitsForm: TrainingSplit;
    trainingSplitList: TrainingSplit[];
}

export const initialTrainingSplitState: TrainingSplitsState = {
    trainingSplitsForm: undefined,
    trainingSplitList: undefined,
};

export const trainingSplitsReducer = createReducer(
    initialTrainingSplitState,
    on(trainingSplitActions.updateTrainingSplitForm, (state, action) => ({
        ...state,
        trainingSplitsForm: action.trainingSplitForm,
    })),
);
