import { SingleExercise } from './single-exercise/single-exercise.model';

export interface NewTraining {
    exercises: SingleExercise[];
    editMode: boolean;
    userId: string;
    trainingDate: string;
    _id?: string;
    bodyweight?: number;
}
