import { IsNotEmpty } from 'class-validator';
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

export class SearchTrainingsDto {

    @IsNotEmpty({ message: 'training.past_trainings.filters.errors.search_empty' })
    searchValue: string;
}