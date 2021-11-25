
export interface Set {
    setNumber: number;
    weightLifted: number;
    reps: number;
    _id?: string;
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

export function createInitialSet(): Set[] {
    const sets: Set[] = [];
    sets.push({
        setNumber: 1,
        weightLifted: null,
        reps: null,
    } as Set);
    return sets as Set[];
}

export type SetFormValidationErrors =
    'setNotFilled' |
    'firstSetInvalid' |
    'repsRequired' |
    'weightLiftedRequired' |
    'min' |
    'max' |
    'pattern' |
    'onlyNumbers';

export type FormSetData = {
    setNumber?: number;
    weightLifted?: number;
    reps?: number;
};
