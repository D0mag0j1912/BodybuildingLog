import { WeightUnit } from '../../common/preferences.type';
import { SingleExercise } from '../shared/single-exercise.model';

export interface NewTraining {
    readonly exercises: SingleExercise[];
    readonly editMode: boolean;
    readonly userId: string;
    readonly _id?: string;
    readonly bodyweight?: number;
    readonly trainingDate?: string;
    readonly weightUnit?: WeightUnit;
}
