import { Exercise } from '../exercise.model';
import { Set } from './set.model';

export type FormControlSingleExercise = {
    sets?: Set[];
    total?: string;
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
