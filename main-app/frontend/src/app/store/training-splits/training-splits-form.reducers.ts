import { createReducer, on } from '@ngrx/store';
import { ExerciseDto as Exercise } from '../../../api/models/exercise-dto';
import { CustomTrainingDto as CustomTraining } from '../../../api/models/custom-training-dto';
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
        ...state,
        trainingSplitsForm: action.trainingSplitForm,
    })),
    on(trainingSplitActions.updateNumberOfSets, (state, action) => ({
        ...state,
        trainingSplitsForm: {
            trainings: [...state.trainingSplitsForm.trainings].map(
                (training: CustomTraining, indexTraining: number) => {
                    if (indexTraining === action.trainingsIndex) {
                        return {
                            ...training,
                            exercises: [...training.exercises].map(
                                (exercise: Exercise, indexExercise: number) => {
                                    if (indexExercise === action.exercisesIndex) {
                                        return {
                                            ...exercise,
                                            numberOfSets: action.numberOfSets,
                                        };
                                    }
                                    return exercise;
                                },
                            ),
                        };
                    }
                    return training;
                },
            ),
            name: state.trainingSplitsForm.name,
            userId: state.trainingSplitsForm.userId,
        },
    })),
);
