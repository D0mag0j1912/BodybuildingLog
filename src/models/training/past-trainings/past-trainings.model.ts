import { Training } from '../new-training/new-training.model';

export interface PastTrainingsResponse {
    Trainings: Training[];
    Dates: {
        StartDate: Date;
        EndDate: Date;
    };
    TotalTrainings: number;
    readonly Message?: string;
}
