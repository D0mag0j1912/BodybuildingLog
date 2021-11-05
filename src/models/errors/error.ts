export interface Error {
    response?: {
        status: number;
        message: string;
    };
    status?: number;
}