
export interface Paginator<T> {
    Results?: T;
    Next?: PaginatorParams;
    Previous?: PaginatorParams;
    TotalCount?: number;
}

export interface PaginatorParams {
    readonly Page: number;
    readonly Size: number;
}

export const DEFAULT_PAGE = 1;
export const DEFAULT_SIZE = 5;
