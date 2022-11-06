export interface Set {
    setNumber: number;
    weightLifted?: number;
    reps?: number;
    _id?: string;
}

export interface SetTrainingData {
    exerciseName: string;
    setNumber: number;
    weightLifted: number;
    reps: number;
    total: number;
}
