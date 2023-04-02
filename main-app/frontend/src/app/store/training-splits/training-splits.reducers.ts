import { createReducer, on } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import { StreamData } from '../../models/common/common.model';
import * as trainingSplitActions from './training-splits.actions';

export interface TrainingSplitsState {
    trainingSplitsForm: TrainingSplit;
    trainingSplitList: StreamData<TrainingSplit[]>;
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
    on(trainingSplitActions.createTrainingSplitSuccess, (state, action) => ({
        ...state,
        trainingSplitList: {
            ...state.trainingSplitList,
            Value: [...state.trainingSplitList.Value, action.trainingSplit],
        },
    })),
    on(trainingSplitActions.editTrainingSplitSuccess, (state, action) => ({
        ...state,
        trainingSplitList: {
            ...state.trainingSplitList,
            Value: [...state.trainingSplitList.Value].map((trainingSplit: TrainingSplit) => {
                if (trainingSplit._id === action.trainingSplit._id) {
                    return {
                        ...trainingSplit,
                        name: action.trainingSplit.name,
                        trainings: action.trainingSplit.trainings,
                    };
                }
                return trainingSplit;
            }),
        },
    })),
    on(trainingSplitActions.getTrainingSplitListSuccess, (state, action) => ({
        ...state,
        trainingSplitList: action.trainingSplitList,
    })),
);
