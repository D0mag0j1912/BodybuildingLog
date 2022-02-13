import { Training } from '../new-training/new-training.model';
export interface PastTrainings {
    readonly Trainings: Training[];
    readonly Dates: {
        StartDate: Date;
        EndDate: Date;
    };
    readonly IsPreviousWeekDisabled: boolean;
    readonly Message?: string;
}

export interface PastTrainingsQueryParams {
    startDate: string;
    endDate: string;
    search?: string;
    page?: string;
    size?: string;
}

export interface DateInterval {
    readonly StartDate: Date;
    readonly EndDate: Date;
}

export type Page = 'Previous' | 'Next';

export const QUERY_PARAMS_DATE_FORMAT = 'dd-MM-yyyy';
export const TEMPLATE_DATE_FORMAT = 'dd.MM.yyyy';
export const MAX_TRAININGS_PER_PAGE = 3;
export const INITIAL_PAGE = 1;
