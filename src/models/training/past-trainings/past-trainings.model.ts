import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { Training } from '../new-training/new-training.model';

export interface PastTrainingsResponse {
    readonly Trainings: Training[];
    readonly Dates: {
        StartDate: Date;
        EndDate: Date;
    };
    readonly TrainingsPerPage: number;
    readonly Message?: string;
}

export class SearchTrainingsDto {

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: 'training.past_trainings.filters.errors.search_error' })
    @MaxLength(50, { message: 'training.past_trainings.filters.errors.search_max_length' })
    searchValue: string;
}