import { Exercise } from '../exercise.model';
import { Set } from './set.model';

export interface SingleExercise {
    exerciseData: Exercise;
    sets: Set[];
    total: number;
    disabledTooltip: boolean;
    availableExercises: Exercise[];
    _id?: string;
}
