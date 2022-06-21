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

export type FormControlSingleExercise = {
    sets?: Set[];
    total?: string;
    disabledTooltip?: boolean;
};

export type FormGroupExerciseData = { exerciseData?: Exercise };

export type FormControlExerciseData = {
    name?: string;
    imageUrl?: string;
    primaryMuscleGroup?: string;
    translations?: {
        hr?: string;
        en?: string;
    };
};
