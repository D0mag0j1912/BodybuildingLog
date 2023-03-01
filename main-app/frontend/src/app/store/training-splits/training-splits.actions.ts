import { createAction, props } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';

export const updateTrainingSplitForm = createAction(
    '[Trainings splits] Update training split form',
    props<{ trainingSplitForm: TrainingSplit }>(),
);

export const updateNumberOfSets = createAction(
    '[Training splits] Update number of sets',
    props<{
        numberOfSets: number;
        trainingsIndex: number;
        exercisesIndex: number;
    }>(),
);
