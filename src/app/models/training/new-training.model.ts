import { Exercise } from "./exercise.model";

/*Interface-i za praćenje trenutnog stanja treninga*/
export interface NewTraining {
    exercise: SingleExercise[];
    editMode: boolean;
    userId: string;
    _id?: string;
    bodyweight?: number;
    createdAt?: Date;
    updatedAt?: Date;
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
