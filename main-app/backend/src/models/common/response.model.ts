export interface GeneralResponseData {
    readonly Message: string;
}

export interface StreamData<T> {
    IsLoading: boolean;
    IsError: boolean;
    Value?: T;
}