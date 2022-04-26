import { DateInterval } from '../../../models/common/dates.model';
import { Training } from '../new-training/training.model';

export interface PastTrainings {
    Trainings: Training[];
    Dates: DateInterval;
    IsPreviousWeek?: boolean;
    IsNextWeek?: boolean;
    EarliestTrainingDate?: string;
    Message?: string;
}

export type PastTrainingsFilterType = 'week' | 'day';
