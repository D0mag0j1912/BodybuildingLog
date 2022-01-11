
export interface SearchQuery<T> {
    data: T;
    searchValue: string;
}

export interface ErrorMessage {
    readonly message: string;
    readonly statusCode?: number;
}

export interface TrainingData<T> {
    isLoading: boolean;
    isError: boolean;
    value?: T;
}
