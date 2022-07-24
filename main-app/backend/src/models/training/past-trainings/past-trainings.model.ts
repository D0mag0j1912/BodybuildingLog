import { DateInterval } from '../../common/dates.model';
import { NewTraining } from '../new-training/new-training.model';

export interface PastTrainings {
    Trainings: NewTraining[];
    Dates: DateInterval;
    IsPreviousWeek?: boolean;
    IsNextWeek?: boolean;
    EarliestTrainingDate?: string;
    DayName?: string;
    Message?: string;
}
