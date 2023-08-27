import { createReducer, on } from '@ngrx/store';
import * as PastTrainingsActions from '../actions/past-trainings.actions';
import { Paginator } from '../../../models/common/paginator.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';
import { mapDateInterval } from '../../../helpers/training/past-trainings/map-past-trainings-dates.helper';
import { NewTrainingDto as NewTraining } from '../../../../api/models/new-training-dto';

export interface PastTrainingsState {
    pastTrainings: Paginator<PastTrainings>;
    filter: string;
    isLoading: boolean;
}

export const initialPastTrainingsState: PastTrainingsState = {
    pastTrainings: undefined,
    filter: undefined,
    isLoading: false,
};

export const pastTrainingsReducer = createReducer(
    initialPastTrainingsState,
    on(PastTrainingsActions.setPastTrainings, (state, { response }) => ({
        ...state,
        pastTrainings: mapDateInterval(response),
    })),
    on(PastTrainingsActions.deleteTraining, (state, { trainingId }) => ({
        ...state,
        pastTrainings: {
            ...state.pastTrainings,
            Results: {
                ...state.pastTrainings.Results,
                Trainings: [...state.pastTrainings.Results.Trainings].filter(
                    (training: NewTraining) => training._id !== trainingId,
                ),
            },
        },
    })),
    on(PastTrainingsActions.saveFilter, (state, { filter }) => ({
        ...state,
        filter,
    })),
    on(PastTrainingsActions.setLoading, (state, { isLoading }) => ({
        ...state,
        isLoading,
    })),
);
