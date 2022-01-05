import { Training } from '../new-training/new-training.model';
export interface PastTrainingsResponse {
    readonly trainings: Training[];
    readonly dates: {
        startDate: Date,
        endDate: Date
    };
    readonly trainingsPerPage: number;
    readonly status: PastTrainingsStatus;
    readonly message?: string;
}

export type PastTrainingsStatus = 'SUCCESS' | 'LOADING' | 'ERROR';

export interface ErrorMessage {
    readonly message: string;
    readonly statusCode?: number;
}

export interface DateInterval {
    readonly startDate: Date;
    readonly endDate: Date;
}

export type Week = 'Previous week' | 'Next week';

export const QUERY_PARAMS_DATE_FORMAT: string = 'dd-MM-yyyy';
export const TEMPLATE_DATE_FORMAT: string = 'dd.MM.yyyy';
