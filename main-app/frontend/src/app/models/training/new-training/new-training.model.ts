import { WeightUnit } from '../../common/preferences.type';
import { SingleExercise } from './single-exercise/single-exercise.model';

export interface NewTraining {
    exercises: SingleExercise[];
    editMode: boolean;
    userId: string;
    trainingDate: string;
    weightUnit: WeightUnit;
    _id?: string;
    bodyweight?: number;
}
