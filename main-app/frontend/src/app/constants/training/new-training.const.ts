import { Exercise } from '../../models/training/exercise.model';
import { NewTraining } from '../../models/training/new-training/new-training.model';
import { SingleExercise } from '../../models/training/shared/single-exercise.model';
import { DEFAULT_WEIGHT_UNIT } from '../shared/default-weight-format.const';
import { Set } from '../../models/training/shared/set.model';

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
    sets: [
        {
            setNumber: 1,
            weightLifted: null,
            reps: null,
        } as Set,
    ],
    total: null,
    availableExercises: [...exercises],
});

export const EMPTY_TRAINING: NewTraining = {
    exercises: [createEmptyExercise([])],
    _id: '',
    bodyweight: null,
    editMode: false,
    userId: null,
    weightUnit: DEFAULT_WEIGHT_UNIT,
};

export const TOTAL_INITIAL_WEIGHT = 0;
