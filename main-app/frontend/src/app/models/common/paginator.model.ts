import { Page } from './page.type';

export interface Paginator<T> {
    Results?: T;
    Next?: PaginatorParams;
    Previous?: PaginatorParams;
    CurrentPage?: number;
    PerPage?: number;
    TotalCount?: number;
    TotalPages?: number;
}

export interface PaginatorParams {
    Page: number;
    PerPage: number;
}

export interface PaginatorChanged {
    page: number;
    perPage: number;
    isSearch?: boolean;
    pageType?: Page;
    earliestTrainingDate?: string;
}
