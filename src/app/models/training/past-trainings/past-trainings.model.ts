import { Training } from '../new-training/new-training.model';

export interface PastTrainings {
    readonly Trainings: Training[];
    readonly Dates: DateInterval;
    readonly IsPreviousWeek?: boolean;
    readonly IsNextWeek?: boolean;
    readonly EarliestTrainingDate?: Date;
    readonly Message?: string;
}

export interface DateInterval {
    readonly StartDate: Date;
    readonly EndDate: Date;
}

export interface PastTrainingsQueryParams {
    readonly startDate: string;
    readonly endDate: string;
    readonly search?: string;
    readonly page?: string;
    readonly size?: string;
}

export const QUERY_PARAMS_DATE_FORMAT = 'dd-MM-yyyy';
export const TEMPLATE_DATE_FORMAT = 'dd.MM.yyyy';
export const DEFAULT_TRAININGS_PER_PAGE = 3;
export const INITIAL_PAGE = 1;
