import { Exercise } from '../exercise.model';

export interface NewTraining {
    exercise: SingleExercise[];
    readonly editMode: boolean;
    readonly userId: string;
    readonly _id?: string;
    readonly bodyweight?: number;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
export interface SingleExercise {
    formArrayIndex: number;
    exerciseName: string;
    sets: Set[];
    total: number;
    disabledTooltip: boolean;
    availableExercises: Exercise[];
}
export interface Set {
    setNumber: number;
    weightLifted: number;
    reps: number;
}

export interface SetStateChanged {
    indexExercise: number;
    indexSet: number;
}
