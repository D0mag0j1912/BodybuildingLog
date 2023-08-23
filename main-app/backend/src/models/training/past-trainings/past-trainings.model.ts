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
    Dates?: DateIntervalDto;

    @ApiProperty({ type: Boolean })
    @IsNotEmpty()
    @IsBoolean()
    IsPrevious: boolean;

    @ApiProperty({ type: Boolean })
    @IsNotEmpty()
    @IsBoolean()
    IsNext: boolean;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    EarliestTrainingDate: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    DayName: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    Message?: string;
}
