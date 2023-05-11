import { createAction, props } from '@ngrx/store';
import { TrainingSplitDto as TrainingSplit } from '../../../api/models/training-split-dto';
import { StreamData } from '../../models/common/common.model';
import { PreferencesDto as Preferences } from '../../../api/models/preferences-dto';
import { PreferenceChangedType } from '../../models/common/preferences.type';

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

export const createTrainingSplitSuccess = createAction(
    '[Training splits] Create training split success',
    props<{ trainingSplit: TrainingSplit }>(),
);

export const editTrainingSplit = createAction(
    '[Training splits] Edit training split',
    props<{ id: string; trainingSplit: TrainingSplit }>(),
);

export const editTrainingSplitSuccess = createAction(
    '[Training splits] Edit training split success',
    props<{ trainingSplit: TrainingSplit }>(),
);

/**
 * Delete training split
 */
export const deleteTrainingSplit = createAction(
    '[Training splits] Delete training split',
    props<{ trainingSplitId: string }>(),
);

/**
 * Get training splits
 */
export const getTrainingSplitList = createAction('[Training splits] Get training split list');

export const getTrainingSplitListSuccess = createAction(
    '[Training splits] Get training split list success',
    props<{ trainingSplitList: StreamData<TrainingSplit[]> }>(),
);

/**
 * Search training splits
 */
export const searchTrainingSplits = createAction(
    '[Training splits] Search training splits',
    props<{ contains: string }>(),
);

/**
 * Get training split
 */
export const getTrainingSplit = createAction(
    '[Training splits] Get training split',
    props<{ trainingSplitId: string }>(),
);

/**
 * Set training split as active
 */
export const setTrainingSplitAsActive = createAction(
    '[Training splits] Set training split as active',
    props<{
        preferences: Preferences;
        preferenceChangedType: PreferenceChangedType;
        activeTrainingSplit: TrainingSplit;
    }>(),
);

export const setTrainingSplitAsActiveSuccess = createAction(
    '[Training splits] Set training split as active success',
    props<{ activeTrainingSplit: TrainingSplit }>(),
);
