export interface GeneralResponseData {
    readonly message: string;
}

export interface TrainingData<T> {
    IsLoading: boolean;
    IsError: boolean;
    Value?: T;
}