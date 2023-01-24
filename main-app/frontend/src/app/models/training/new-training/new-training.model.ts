import { NewTrainingPreferencesDto as NewTrainingPreferences } from '../../../../api/models/new-training-preferences-dto';
import { SingleExercise } from './single-exercise/single-exercise.model';

export interface NewTraining {
    exercises: SingleExercise[];
    editMode: boolean;
    userId: string;
    trainingDate: string;
    preferences: NewTrainingPreferences;
    _id?: string;
    bodyweight?: number;
}
