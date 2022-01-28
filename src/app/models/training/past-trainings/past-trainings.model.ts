import { Training } from '../new-training/new-training.model';
export interface PastTrainingsResponse {
    readonly Trainings: Training[];
    readonly Dates: {
        StartDate: Date,
        EndDate: Date
    };
    readonly TotalTrainings: number;
    readonly Message?: string;
}

export interface PastTrainingsQueryParams {
    startDate?: string;
    endDate?: string;
    search?: string;
}

export interface DateInterval {
    readonly StartDate: Date;
    readonly EndDate: Date;
}

export type Week = 'Previous week' | 'Next week';

export const QUERY_PARAMS_DATE_FORMAT: string = 'dd-MM-yyyy';
export const TEMPLATE_DATE_FORMAT: string = 'dd.MM.yyyy';
export const MAX_TRAININGS_PER_PAGE: number = 5;
