import { NewTraining } from '../new-training/new-training.model';

export interface PastTrainings {
    readonly Trainings: NewTraining[];
    readonly Dates: DateInterval;
    readonly IsPreviousWeek?: boolean;
    readonly IsNextWeek?: boolean;
    readonly EarliestTrainingDate?: string;
    readonly DayName?: string;
    readonly Message?: string;
}

export interface DateInterval {
    readonly StartDate: Date;
    readonly EndDate: Date;
}

export interface PastTrainingsQueryParams {
    readonly startDate?: string;
    readonly endDate?: string;
    readonly search?: string;
    readonly page?: string;
    readonly size?: string;
    readonly showBy?: PeriodFilterType;
}

export type PeriodFilterType = 'week' | 'day';

export interface PastTrainingsFilterType {
    periodFilter?: PeriodFilterType;
    //TODO: add more types
}
