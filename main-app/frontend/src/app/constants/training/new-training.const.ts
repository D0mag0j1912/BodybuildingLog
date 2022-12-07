import { Exercise } from '../../models/training/exercise.model';
import { NewTraining } from '../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../models/training/new-training/single-exercise/single-exercise.model';
import { DEFAULT_WEIGHT_UNIT } from '../shared/default-weight-unit.const';

export const TOTAL_INITIAL_WEIGHT = 0;

export const createEmptyExercise = (exercises: Exercise[]): SingleExercise => ({
    exerciseData: {
        name: '',
        imageUrl: '',
        primaryMuscleGroup: '',
        translations: {
            hr: '',
            en: '',
        },
        availableSetCategories: ['freeWeighted'],
        selectedSetCategories: [],
    },
    sets: [],
    total: TOTAL_INITIAL_WEIGHT,
    availableExercises: [...exercises],
});

export const EMPTY_TRAINING: NewTraining = {
    exercises: [createEmptyExercise([])],
    editMode: false,
    userId: '',
    _id: '',
    bodyweight: null,
    trainingDate: new Date().toISOString(),
    preferences: {
        weightUnit: DEFAULT_WEIGHT_UNIT,
    },
};
