import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
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

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: 'training.past_trainings.filters.errors.search_error' })
    @IsNotEmpty({ message: 'training.past_trainings.filters.errors.search_empty' })
    @MaxLength(50, { message: 'training.past_trainings.filters.errors.search_max_length' })
    searchValue: string;
}