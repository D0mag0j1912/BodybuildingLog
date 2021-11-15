export interface Set {
    setNumber: number;
    weightLifted: number;
    reps: number;
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
    formArrayIndex: number;
    exerciseName: string;
    setNumber: number;
    weightLifted: number;
    reps: number;
    total: number;
}
