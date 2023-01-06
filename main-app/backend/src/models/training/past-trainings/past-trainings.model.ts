import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { DateIntervalDto } from '../../common/dates.model';
import { NewTrainingDto } from '../new-training/new-training.model';

export class PastTrainingsDto {
    @ApiProperty({ type: NewTrainingDto })
    @IsNotEmpty()
    Trainings: NewTrainingDto[];

    @ApiProperty({ type: DateIntervalDto })
    @IsNotEmpty()
    Dates: DateIntervalDto;

    @ApiPropertyOptional()
    @IsBoolean()
    IsPreviousWeek?: boolean;

    @ApiPropertyOptional()
    @IsBoolean()
    IsNextWeek?: boolean;

    @ApiPropertyOptional()
    @IsString()
    EarliestTrainingDate?: string;

    @ApiPropertyOptional()
    @IsString()
    DayName?: string;

    @ApiPropertyOptional()
    @IsString()
    Message?: string;
}
