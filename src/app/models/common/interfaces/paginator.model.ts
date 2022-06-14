import { DateInterval } from '../../training/past-trainings/past-trainings.model';
import { Page } from '../types/page.type';

export interface Paginator<T> {
    readonly Results?: T;
    readonly Next?: PaginatorParams;
    readonly Previous?: PaginatorParams;
    readonly CurrentPage?: number;
    readonly Size?: number;
    readonly TotalCount?: number;
    readonly TotalPages?: number;
}

export interface PaginatorParams {
    readonly Page: number;
    readonly Size: number;
}

export interface PaginatorChanged {
    readonly Page: number;
    readonly Size: number;
    readonly IsSearch?: boolean;
    readonly PageType?: Page;
    readonly DateInterval?: DateInterval;
    readonly EarliestTrainingDate?: string;
}

export const DEFAULT_SIZE = 3;
export const INITIAL_PAGE = 1;
