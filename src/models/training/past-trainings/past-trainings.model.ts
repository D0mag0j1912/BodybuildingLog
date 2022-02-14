import { Training } from '../new-training/new-training.model';

export interface PastTrainings {
    Trainings: Training[];
    Dates: {
        StartDate: Date;
        EndDate: Date;
    };
    IsPreviousWeek?: boolean;
    IsNextWeek?: boolean;
    readonly Message?: string;
}
