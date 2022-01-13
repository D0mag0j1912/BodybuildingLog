
export interface SearchQuery<T> {
    data: T;
    searchValue: string;
}

export interface ErrorMessage {
    readonly message: string;
    readonly statusCode?: number;
}

export interface TrainingData<T> {
    IsLoading: boolean;
    IsError: boolean;
    Value?: T;
}
