export interface GeneralResponseData {
    readonly message: string;
}

export interface TrainingData<T> {
    isLoading: boolean;
    isError: boolean;
    value?: T;
}