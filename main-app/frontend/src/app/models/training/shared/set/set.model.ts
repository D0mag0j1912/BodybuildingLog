export interface Set {
    setNumber: number;
    weightLifted?: number;
    reps?: number;
    _id?: string;
}

export interface SetTrainingData {
    exerciseName: string;
    weightLifted: number;
    reps: number;
    setNumber?: number;
    total?: number;
}
