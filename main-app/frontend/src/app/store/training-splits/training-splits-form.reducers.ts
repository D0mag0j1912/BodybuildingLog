import { createReducer, on } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import * as trainingSplitActions from './training-splits.actions';

export interface TrainingSplitsFormState {
    trainingSplitsForm: TrainingSplit;
}

export const initialTrainingSplitsFormState: TrainingSplitsFormState = {
    trainingSplitsForm: undefined,
};

export const trainingSplitsFormReducer = createReducer(
    initialTrainingSplitsFormState,
    on(trainingSplitActions.updateTrainingSplitForm, (state, action) => ({
        trainingSplitsForm: action.trainingSplitForm,
    })),
);
