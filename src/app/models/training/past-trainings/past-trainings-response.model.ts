import { NewTraining } from '../new-training/new-training.model';
export interface PastTrainingsResponse {
    readonly trainings: [NewTraining];
    readonly dates: {
        startDate: Date,
        endDate: Date
    };
    readonly trainingsPerPage: number;
    readonly message?: string;
}
export interface ErrorMessage {
    readonly message: string;
    readonly statusCode?: number;
}

export interface DateData {
    readonly startDate: Date;
    readonly endDate: Date;
}
