export interface Set {
    readonly setNumber: number;
    readonly weightLifted: number;
    readonly reps: number;
    readonly _id?: string;
}

export interface SetStateChanged {
    readonly indexExercise: number;
    readonly indexSet: number;
    readonly isWeightLiftedValid?: boolean;
    readonly isRepsValid?: boolean;
    readonly newTotal?: number;
    readonly newSet?: Set;
}

export interface SetTrainingData {
    readonly exerciseName: string;
    readonly setNumber: number;
    readonly weightLifted: number;
    readonly reps: number;
    readonly total: number;
}
