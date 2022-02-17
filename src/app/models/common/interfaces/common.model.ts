
export interface ErrorMessage {
    readonly message: string;
    readonly statusCode?: number;
}

export interface StreamData<T> {
    IsLoading: boolean;
    IsError: boolean;
    Value?: T;
}

export enum LocalStorageItems {
    TRAINING_STATE = 'trainingState',
    USER_DATA = 'userData',
    ALL_EXERCISES = 'allExercises',
    QUERY_PARAMS = 'queryParams',
}
