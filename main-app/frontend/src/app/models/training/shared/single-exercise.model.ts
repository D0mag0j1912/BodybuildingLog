import { Exercise } from '../exercise.model';
import { Set } from './set.model';

export interface SingleExercise {
    readonly exerciseData: Exercise;
    readonly sets: Set[];
    readonly total: number;
    readonly availableExercises: Exercise[];
    readonly _id?: string;
}
