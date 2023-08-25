import { createAction, props } from '@ngrx/store';
import {
    PastTrainings,
    PastTrainingsPayloadType,
} from '../../../models/training/past-trainings/past-trainings.model';
import { StreamData } from '../../../models/common/common.model';
import { Paginator } from '../../../models/common/paginator.model';

/** Loading */
export const setLoading = createAction(
    '[Past trainings] Set loading',
    props<{ isLoading: boolean }>(),
);

/** Past trainings */
export const getPastTrainings = createAction(
    '[Past trainings] Get past trainings',
    props<{ payload: PastTrainingsPayloadType }>(),
);

export const setPastTrainings = createAction(
    '[Past trainings] Set past trainings',
    props<{ response: StreamData<Paginator<PastTrainings>> }>(),
);

export const deleteTraining = createAction(
    '[Past trainings] Delete training',
    props<{ trainingId: string }>(),
);

export const deleteTrainingSuccess = createAction('[Past trainings] Delete training success');

/** Past trainings filters */
export const saveFilter = createAction('[Past trainings] Save filter', props<{ filter: string }>());
