
export interface Set {
    readonly setNumber: number;
    readonly weightLifted: number;
    readonly reps: number;
    readonly _id?: string;
}

export interface SetStateChanged {
    indexExercise: number;
    indexSet: number;
    isWeightLiftedValid?: boolean;
    isRepsValid?: boolean;
    newTotal?: number;
    newSet?: Set;
}

export interface SetTrainingData {
    exerciseName: string;
    setNumber: number;
    weightLifted: number;
    reps: number;
    total: number;
}
