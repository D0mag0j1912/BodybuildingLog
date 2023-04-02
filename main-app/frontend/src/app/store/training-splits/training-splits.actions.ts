import { createAction, props } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import { StreamData } from '../../models/common/common.model';

/**
 * Create/Edit training split
 */
export const updateTrainingSplitForm = createAction(
    '[Training splits] Update training split form',
    props<{ trainingSplitForm: TrainingSplit }>(),
);

export const createTrainingSplit = createAction(
    '[Training splits] Create training split',
    props<{ trainingSplit: TrainingSplit }>(),
);

export const editTrainingSplit = createAction(
    '[Training splits] Edit training split',
    props<{ id: string; trainingSplit: TrainingSplit }>(),
);

export const submitTrainingSplitSuccess = createAction(
    '[Training splits] Submit training split success',
    props<{ trainingSplit: TrainingSplit }>(),
);

/**
 * Get training splits
 */
export const getTrainingSplitList = createAction('[Training splits] Get training split list');

export const getTrainingSplitListSuccess = createAction(
    '[Training splits] Get training split list success',
    props<{ trainingSplitList: StreamData<TrainingSplit[]> }>(),
);
