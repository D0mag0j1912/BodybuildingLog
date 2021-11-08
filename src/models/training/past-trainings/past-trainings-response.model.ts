import { NewTraining } from '../new-training/new-training.model';

export interface PastTrainingsResponse {
    readonly trainings: NewTraining[];
    readonly dates: {
        startDate: Date;
        endDate: Date;
    };
    readonly trainingsPerPage: number;
    readonly message?: string;
}