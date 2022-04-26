import { SingleExercise } from '../shared/single-exercise.model';

export interface Training {
    readonly exercise: SingleExercise[];
    readonly editMode: boolean;
    readonly userId: string;
    readonly _id?: string;
    readonly bodyweight?: number;
    readonly trainingDate?: string;
}

export type ExerciseStateType = 'Update' | 'Add' | 'Delete';
