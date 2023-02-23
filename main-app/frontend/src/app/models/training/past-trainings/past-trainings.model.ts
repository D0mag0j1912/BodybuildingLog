import { NewTrainingDto as NewTraining } from '../../../../api/models/new-training-dto';

export interface PastTrainings {
    Trainings: NewTraining[];
    Dates: DateInterval;
    IsPreviousWeek?: boolean;
    IsNextWeek?: boolean;
    EarliestTrainingDate?: string;
    DayName?: string;
    Message?: string;
}

export interface DateInterval {
    StartDate: Date;
    EndDate: Date;
}

export interface PastTrainingsQueryParams {
    startDate?: string;
    endDate?: string;
    search?: string;
    page?: string;
    size?: string;
    showBy?: PeriodFilterType;
}

export type PeriodFilterType = 'week' | 'day';

export interface PastTrainingsFilterType {
    periodFilter?: PeriodFilterType;
    //TODO: add more types
}
