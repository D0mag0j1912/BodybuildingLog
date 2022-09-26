import { Exercise } from '../../models/training/exercise.model';
import { NewTraining } from '../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../models/training/shared/single-exercise.model';
import { DEFAULT_WEIGHT_UNIT } from '../shared/default-weight-format.const';
import { Set } from '../../models/training/shared/set.model';

export const TOTAL_INITIAL_WEIGHT = 0;

export const EMPTY_SET: Set = {
    setNumber: 1,
    weightLifted: null,
    reps: null,
};

export const createEmptyExercise = (exercises: Exercise[]): SingleExercise => ({
    exerciseData: {
        name: '',
        imageUrl: '',
        primaryMuscleGroup: '',
        setCategories: [],
        primarySetCategory: 'freeWeighted',
        translations: {
            hr: '',
            en: '',
        },
    },
    sets: [EMPTY_SET],
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
    weightUnit: DEFAULT_WEIGHT_UNIT,
};
