import { DateInterval } from '../../common/dates.model';
import { NewTrainingDto } from '../new-training/new-training.model';

export interface PastTrainings {
    Trainings: NewTrainingDto[];
    Dates: DateInterval;
    IsPreviousWeek?: boolean;
    IsNextWeek?: boolean;
    EarliestTrainingDate?: string;
    DayName?: string;
    Message?: string;
}
