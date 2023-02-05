import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DateIntervalDto } from '../../common/dates.model';
import { NewTrainingDto } from '../new-training/new-training.model';

export class PastTrainingsDto {
    @ApiProperty({ type: [NewTrainingDto] })
    @IsNotEmpty()
    Trainings: NewTrainingDto[];

    @ApiProperty({ type: DateIntervalDto })
    @IsNotEmpty()
    Dates: DateIntervalDto;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    IsPreviousWeek?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    IsNextWeek?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    EarliestTrainingDate?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    DayName?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    Message?: string;
}
