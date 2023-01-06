import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { DateIntervalDto } from '../../common/dates.model';
import { NewTrainingDto } from '../new-training/new-training.model';

export class PastTrainingsDto {
    @ApiProperty({ type: NewTrainingDto })
    @IsNotEmpty()
    Trainings: NewTrainingDto[];

    @ApiProperty({ type: DateIntervalDto })
    Dates: DateIntervalDto;

    IsPreviousWeek?: boolean;
    IsNextWeek?: boolean;
    EarliestTrainingDate?: string;
    DayName?: string;
    Message?: string;
}
