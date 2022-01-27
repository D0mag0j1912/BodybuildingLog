
export interface ErrorMessage {
    readonly message: string;
    readonly statusCode?: number;
}

export interface TrainingData<T> {
    IsLoading: boolean;
    IsError: boolean;
    Value?: T;
}

export enum LocalStorageItems {
    TRAINING_STATE = 'trainingState',
    USER_DATA = 'userData',
    ALL_EXERCISES = 'allExercises',
}
