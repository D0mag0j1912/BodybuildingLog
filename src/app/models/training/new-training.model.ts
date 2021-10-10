import { Exercise } from "./exercise.model";

/*Interface-i za praćenje trenutnog stanja treninga*/
export interface NewTraining {
    userId: string;
    exercise: SingleExercise[];
    editMode: boolean;
    _id?: string;
    bodyweight?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface SingleExercise {
    formArrayIndex: number;
    currentExercise: Exercise;
    sets: Set[];
    total: number;
    availableExercises: Exercise[];
}
export interface Set {
    setNumber: number;
    weightLifted: number;
    reps: number;
}
