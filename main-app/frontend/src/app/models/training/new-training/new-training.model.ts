import { TrainingPreferences } from './new-training.type';
import { SingleExercise } from './single-exercise/single-exercise.model';

export interface NewTraining {
    exercises: SingleExercise[];
    editMode: boolean;
    userId: string;
    trainingDate: string;
    preferences: TrainingPreferences;
    _id?: string;
    bodyweight?: number;
}
