import { WeightUnit } from '../../common/preferences.type';
import { SingleExercise } from '../shared/single-exercise/single-exercise.model';

export interface NewTraining {
    exercises: SingleExercise[];
    editMode: boolean;
    userId: string;
    _id?: string;
    bodyweight?: number;
    trainingDate?: string;
    weightUnit?: WeightUnit;
}
