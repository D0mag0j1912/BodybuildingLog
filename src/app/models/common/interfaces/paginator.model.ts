
export interface Paginator<T> {
    readonly Results?: T;
    readonly Next?: PaginatorParams;
    readonly Previous?: PaginatorParams;
    readonly CurrentPage?: number;
    readonly TotalCount?: number;
    readonly TotalPages?: number;
}

export interface PaginatorParams {
    readonly Page: number;
    readonly Size: number;
}

export const DEFAULT_SIZE = 3;
export const INITIAL_PAGE = 1;
