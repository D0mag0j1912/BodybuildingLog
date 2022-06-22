
export interface Paginator<T> {
    Results?: T;
    Next?: PaginatorParams;
    Previous?: PaginatorParams;
    CurrentPage?: number;
    Size?: number;
    TotalCount?: number;
    TotalPages?: number;
}

export interface PaginatorParams {
    readonly Page: number;
    readonly Size: number;
}