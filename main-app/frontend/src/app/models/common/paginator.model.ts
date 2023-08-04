import { DateInterval } from '../training/past-trainings/past-trainings.model';
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
    Size: number;
}

export interface PaginatorChanged {
    Page: number;
    Size: number;
    IsSearch?: boolean;
    PageType?: Page;
    DateInterval?: DateInterval;
    EarliestTrainingDate?: string;
}
