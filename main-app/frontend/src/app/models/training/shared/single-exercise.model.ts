import { Exercise } from '../exercise.model';
import { Set } from './set.model';
import { SetCategoryType } from './set.type';

export interface SingleExercise {
    readonly exerciseData: Exercise;
    readonly sets: Set[];
    readonly total: number;
    readonly availableExercises: Exercise[];
    readonly setCategory: SetCategoryType[];
    readonly _id?: string;
}
