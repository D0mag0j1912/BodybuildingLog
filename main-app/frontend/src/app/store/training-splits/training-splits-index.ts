import { ActionReducerMap } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';

export interface TrainingSplitsState {
    isLoading?: boolean;
    trainingSplits?: TrainingSplit;
    isError?: boolean;
}

export const reducers: ActionReducerMap<TrainingSplitsState> = {};
