import { SetCategoryType } from './set.type';

export interface Set {
    readonly setNumber: number;
    readonly weightLifted?: number;
    readonly reps?: number;
    readonly _id?: string;
}

export interface SetTrainingData {
    readonly exerciseName: string;
    readonly setNumber: number;
    readonly weightLifted: number;
    readonly reps: number;
    readonly total: number;
}
