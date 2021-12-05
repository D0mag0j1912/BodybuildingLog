import { NewTrainingDto } from '../new-training/new-training.model';

export interface PastTrainingsResponse {
    readonly trainings: NewTrainingDto[];
    readonly dates: {
        startDate: Date;
        endDate: Date;
    };
    readonly trainingsPerPage: number;
    readonly message?: string;
}