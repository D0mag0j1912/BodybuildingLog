export interface ErrorMessage {
    message: string;
    statusCode?: number;
}

export interface StreamData<T> {
    IsLoading: boolean;
    IsError: boolean;
    Value?: T;
}
