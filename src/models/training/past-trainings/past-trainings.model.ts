import { DateInterval } from '../../../models/common/dates.model';
import { Training } from '../new-training/new-training.model';

export interface PastTrainings {
    Trainings: Training[];
    Dates: DateInterval;
    IsPreviousWeek?: boolean;
    IsNextWeek?: boolean;
    EarliestTrainingDate?: Date;
    readonly Message?: string;
}
