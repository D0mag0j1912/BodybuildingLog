import { NewTrainingPreferencesDto as NewTrainingPreferences } from '../../../../api/models/new-training-preferences-dto';
import { SingleExerciseDto as SingleExercise } from '../../../../api/models/single-exercise-dto';

export interface NewTraining {
    exercises: SingleExercise[];
    editMode: boolean;
    userId: string;
    trainingDate: string;
    preferences: NewTrainingPreferences;
    _id?: string;
    bodyweight?: number;
}
