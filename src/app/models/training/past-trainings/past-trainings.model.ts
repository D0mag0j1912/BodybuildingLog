import { Training } from '../new-training/new-training.model';
export interface PastTrainingsResponse {
    readonly trainings: Training[];
    readonly dates: {
        startDate: Date,
        endDate: Date
    };
    readonly trainingsPerPage: number;
    readonly isLoading: boolean;
    readonly message?: string;
}

export interface PastTrainingsQueryParams {
    startDate?: string;
    endDate?: string;
    search?: string;
}

export interface DateInterval {
    readonly startDate: Date;
    readonly endDate: Date;
}

export type Week = 'Previous week' | 'Next week';

export const QUERY_PARAMS_DATE_FORMAT: string = 'dd-MM-yyyy';
export const TEMPLATE_DATE_FORMAT: string = 'dd.MM.yyyy';
