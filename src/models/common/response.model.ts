export interface GeneralResponseData {
    readonly Message: string;
}

export interface TrainingData<T> {
    IsLoading: boolean;
    IsError: boolean;
    Value?: T;
}