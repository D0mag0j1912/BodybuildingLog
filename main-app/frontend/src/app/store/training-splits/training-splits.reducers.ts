import { createReducer, on } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import { StreamData } from '../../models/common/common.model';
import * as TrainingSplitActions from './training-splits.actions';

export interface TrainingSplitsState {
    trainingSplitsForm: TrainingSplit;
    trainingSplitList: StreamData<TrainingSplit[]>;
    activeTrainingSplit: TrainingSplit;
}

export const initialTrainingSplitState: TrainingSplitsState = {
    trainingSplitsForm: undefined,
    trainingSplitList: undefined,
    activeTrainingSplit: undefined,
};

export const trainingSplitsReducer = createReducer(
    initialTrainingSplitState,
    on(TrainingSplitActions.updateTrainingSplitForm, (state, action) => ({
        ...state,
        trainingSplitsForm: action.trainingSplitForm,
    })),
    on(TrainingSplitActions.createTrainingSplitSuccess, (state, action) => ({
        ...state,
        trainingSplitList: {
            ...state.trainingSplitList,
            Value: [...state.trainingSplitList.Value, action.trainingSplit],
        },
    })),
    on(TrainingSplitActions.editTrainingSplitSuccess, (state, action) => ({
        ...state,
        trainingSplitList: {
            ...state.trainingSplitList,
            Value: [...(state.trainingSplitList?.Value ?? [])].map(
                (trainingSplit: TrainingSplit) => {
                    if (trainingSplit._id === action.trainingSplit._id) {
                        return {
                            ...trainingSplit,
                            name: action.trainingSplit.name,
                            trainings: action.trainingSplit.trainings,
                        };
                    }
                    return trainingSplit;
                },
            ),
        },
        activeTrainingSplit:
            state.activeTrainingSplit?._id === action.trainingSplit._id
                ? {
                      ...action.trainingSplit,
                  }
                : { ...state.activeTrainingSplit },
    })),
    on(TrainingSplitActions.deleteTrainingSplit, (state, action) => ({
        ...state,
        trainingSplitList: {
            ...state.trainingSplitList,
            Value: [...state.trainingSplitList.Value].filter(
                (trainingSplit: TrainingSplit) => trainingSplit._id !== action.trainingSplitId,
            ),
        },
    })),
    on(TrainingSplitActions.getTrainingSplitListSuccess, (state, action) => ({
        ...state,
        trainingSplitList: action.trainingSplitList,
    })),
    on(TrainingSplitActions.setTrainingSplitAsActiveSuccess, (state, { activeTrainingSplit }) => ({
        ...state,
        activeTrainingSplit,
    })),
);
