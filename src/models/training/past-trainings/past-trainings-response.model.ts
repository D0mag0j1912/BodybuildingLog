import { NewTraining } from '../new-training/new-training.model';

export interface PastTrainingsResponse {
    trainings: NewTraining[];
    dates: {
        startDate: Date;
        endDate: Date;
    };
    trainingsPerPage: number;
    message?: string;
}