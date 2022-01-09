export interface GeneralResponseData {
    readonly message: string;
}

export interface Data<T> {
    isLoading: boolean;
    isError: boolean;
    value?: T;
}