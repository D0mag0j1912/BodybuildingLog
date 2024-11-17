import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { SearchDataDto } from '../../common/search-data.model';
import { PrimaryMuscleGroupType } from '../primary-muscle-group.type';
import { PeriodFilterType } from './period-filter.type';

export class PastTrainingsPayload {
    @ApiPropertyOptional({
        type: String,
        title: 'Current date',
        required: false,
    })
    @IsOptional()
    currentDate?: string;

    @ApiPropertyOptional({
        enum: ['week', 'day'],
        title: 'Period filter',
        required: false,
    })
    @IsOptional()
    @IsString()
    periodFilterType?: PeriodFilterType;

    @ApiPropertyOptional({
        title: 'Search data',
        required: false,
    })
    @IsOptional()
    searchData?: SearchDataDto;

    @ApiPropertyOptional({
        enum: [
            'Legs',
            'Core',
            'Back',
            'Chest',
            'Biceps',
            'Triceps',
            'Neck',
            'Forearm',
            'Glutes',
            'Shoulders',
            '',
        ],
        title: 'Muscle groups filter',
        isArray: true,
        required: false,
    })
    @IsOptional()
    @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
    @IsArray()
    muscleGroups?: PrimaryMuscleGroupType[];
}
