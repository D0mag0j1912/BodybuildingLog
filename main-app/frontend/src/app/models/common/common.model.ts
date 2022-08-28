export interface ErrorMessage {
    readonly message: string;
    readonly statusCode?: number;
}

export interface StreamData<T> {
    readonly IsLoading: boolean;
    readonly IsError: boolean;
    readonly Value?: T;
}
