import { SingleExercise } from '../shared/single-exercise.model';

export interface NewTraining {
    exercise: SingleExercise[];
    readonly editMode: boolean;
    readonly userId: string;
    readonly _id?: string;
    readonly bodyweight?: number;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
