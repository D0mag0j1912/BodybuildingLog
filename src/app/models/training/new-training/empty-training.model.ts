import { Exercise } from '../exercise.model';
import { SingleExercise } from '../shared/single-exercise.model';
import { Training } from './training.model';

export type EditNewTrainingData = {
    editedDate?: string | Date;
    editTraining?: Training;
};

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
