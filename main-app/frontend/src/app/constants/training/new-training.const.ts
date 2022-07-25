import { Exercise } from '../../models/training/exercise.model';
import { NewTraining } from '../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../models/training/shared/single-exercise.model';
import { DEFAULT_WEIGHT_UNIT } from '../shared/default-weight-format.const';

export const EMPTY_TRAINING: NewTraining = {
    exercises: [],
    _id: '',
    bodyweight: null,
    editMode: false,
    userId: null,
    weightUnit: DEFAULT_WEIGHT_UNIT,
};

export const createEmptyExercise = (exercises: Exercise[]): SingleExercise =>
    ({
        exerciseData: { name: null },
        sets: [],
        total: null,
        availableExercises: [ ...exercises ],
    });

export const TOTAL_INITIAL_WEIGHT = 0;
