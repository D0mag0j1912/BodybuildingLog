import { Exercise } from '../exercise.model';
import { NewTraining } from '../new-training/new-training.model';
import { Set } from './set.model';

export interface SingleExercise {
    readonly exerciseData: Exercise;
    readonly sets: Set[];
    readonly total: number;
    readonly availableExercises: Exercise[];
    readonly _id?: string;
}

export type ExerciseChangedType = {
    trainingState: NewTraining;
    indexExercise: number;
};
