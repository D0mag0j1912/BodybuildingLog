
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
    exerciseName: string;
    setNumber: number;
    weightLifted: number;
    reps: number;
    total: number;
}

export type SetFormValidationErrors =
    'setNotFilled' |
    'setNotEntered' |
    'setNotValid' |
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

export type SetConstituent = 'weightLifted' | 'reps';
