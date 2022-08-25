import { Exercise } from '../exercise.model';
import { SingleExercise } from './single-exercise.model';

export type SingleExerciseFormControlType = {
    [P in keyof Pick<SingleExercise, 'sets' | 'total'>]: SingleExercise[P] extends number ? string : SingleExercise[P];
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
