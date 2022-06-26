
export interface ErrorMessage {
    readonly message: string;
    readonly statusCode?: number;
}

export interface StreamData<T> {
    IsLoading: boolean;
    IsError: boolean;
    Value?: T;
}
