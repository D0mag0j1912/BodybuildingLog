export interface Error {
    readonly response?: {
        readonly status: number;
        readonly message: string;
    };
    readonly status?: number;
}
