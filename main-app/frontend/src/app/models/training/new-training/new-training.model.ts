import { Preferences } from '../../common/preferences.model';
import { SingleExercise } from './single-exercise/single-exercise.model';

export interface NewTraining {
    exercises: SingleExercise[];
    editMode: boolean;
    userId: string;
    trainingDate: string;
    preferences: Partial<Preferences>;
    _id?: string;
    bodyweight?: number;
}
