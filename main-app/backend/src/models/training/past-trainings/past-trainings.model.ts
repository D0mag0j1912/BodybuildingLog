import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DateIntervalDto } from '../../common/dates.model';
import { NewTrainingDto } from '../new-training/new-training.model';

export class PastTrainingsDto {
    @ApiProperty({
        type: [NewTrainingDto],
        title: 'Past trainings',
        required: true,
    })
    @IsNotEmpty()
    Trainings: NewTrainingDto[];

    @ApiProperty({
        type: DateIntervalDto,
        title: 'Start and end dates',
        required: true,
    })
    @IsNotEmpty()
    Dates: DateIntervalDto;

    @ApiProperty({
        type: Boolean,
        title: 'Is previous page',
        required: true,
    })
    @IsNotEmpty()
    @IsBoolean()
    IsPrevious: boolean;

    @ApiProperty({
        type: Boolean,
        title: 'Is next page',
        required: true,
    })
    @IsNotEmpty()
    @IsBoolean()
    IsNext: boolean;

    @ApiProperty({
        type: String,
        title: 'Name of the current day',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    DayName: string;

    @ApiProperty({
        type: String,
        title: 'Earliest logged training date',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    EarliestTrainingDate: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    Message?: string;
}
