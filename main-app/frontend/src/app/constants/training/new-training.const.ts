import { Exercise } from '../../models/training/exercise.model';
import { EditNewTrainingData } from '../../models/training/new-training/edit-training.model';
import { Training } from '../../models/training/new-training/training.model';
import { SingleExercise } from '../../models/training/shared/single-exercise.model';

export const EMPTY_TRAINING_EDIT: EditNewTrainingData = {
    editedDate: null,
    editTraining: null,
};

export const EMPTY_TRAINING: Training = {
    exercises: [],
    _id: '',
    bodyweight: null,
    editMode: false,
    userId: null,
};

export const createEmptyExercise = (exercises: Exercise[]): SingleExercise =>
    ({
        exerciseData: { name: null },
        sets: [],
        total: null,
        disabledTooltip: true,
        availableExercises: [ ...exercises ],
    });

export const TOTAL_INITIAL_WEIGHT = 0;
