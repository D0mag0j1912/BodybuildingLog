import { NewTraining } from "./new-training.model";
export interface PastTrainingsResponse {
    trainings: [NewTraining];
    dates: {
        startDate: Date,
        endDate: Date
    };
    trainingsPerPage: number;
}
export interface ErrorMessage {
    message: string;
    statusCode?: number;
}
