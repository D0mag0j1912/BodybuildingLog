import { Exercise } from '../exercise.model';
import { Set } from './set.model';

export interface SingleExercise {
    formArrayIndex: number;
    exerciseName: string;
    sets: Set[];
    total: number;
    disabledTooltip: boolean;
    availableExercises: Exercise[];
}
