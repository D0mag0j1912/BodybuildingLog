import { Exercise } from '../exercise.model';
import { Set } from './set.model';

export interface SingleExercise {
    exerciseName: string;
    sets: Set[];
    total: number;
    disabledTooltip: boolean;
    availableExercises: Exercise[];
    _id?: string;
}

export type FormSingleExerciseData = {
    name?: string;
    sets?: Set[];
    total?: string;
    disabledTooltip?: boolean;
};
