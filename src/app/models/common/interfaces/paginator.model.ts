
export interface Paginator<T> {
    readonly Results?: T;
    readonly Next?: PaginatorParams;
    readonly Previous?: PaginatorParams;
    readonly TotalCount?: number;
    readonly LastPage?: number;
}

export interface PaginatorParams {
    readonly Page: number;
    readonly Size: number;
}

export const DEFAULT_PAGE = 1;
export const DEFAULT_SIZE = 5;
