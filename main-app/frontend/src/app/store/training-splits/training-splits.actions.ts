import { createAction, props } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';

export const updateTrainingSplitForm = createAction(
    '[Training splits] Update training split form',
    props<{ trainingSplitForm: TrainingSplit }>(),
);

export const createTrainingSplit = createAction(
    '[Training splits] Create training split',
    props<{ trainingSplit: TrainingSplit }>(),
);
