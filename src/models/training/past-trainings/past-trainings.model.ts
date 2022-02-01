import { Training } from '../new-training/new-training.model';

export interface PastTrainingsResponse {
    Trainings: Training[];
    readonly Dates: {
        StartDate: Date;
        EndDate: Date;
    };
    readonly TotalTrainings: number;
    readonly Message?: string;
}
