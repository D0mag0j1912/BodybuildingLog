import { Translations } from '../../../api/models/translations';
import { ExerciseDto as Exercise } from '../../../api/models/exercise-dto';
import { NewTrainingDto as NewTraining } from '../../../api/models/new-training-dto';
import { SingleExerciseDto as SingleExercise } from '../../../api/models/single-exercise-dto';
import { DEFAULT_SET_DURATION_UNIT } from '../shared/default-set-duration-unit.const';
import { DEFAULT_WEIGHT_UNIT } from '../shared/default-weight-unit.const';

export const TOTAL_INITIAL_WEIGHT = 0;

export const createEmptyExercise = (exercises: Exercise[]): SingleExercise => ({
    exerciseData: {
        name: '',
        imageUrl: '',
        primaryMuscleGroup: '',
        availableSetCategories: ['freeWeighted'],
        selectedSetCategories: [],
        translations: {
            en: '',
            hr: '',
        } as Translations,
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
        setDurationUnit: DEFAULT_SET_DURATION_UNIT,
    },
};
