import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { SearchDataDto } from '../../common/search-data.model';
import { ExerciseDto } from '../exercise.model';
import { PeriodFilterType } from './period-filter.type';

export class PastTrainingsPayload {
    @ApiPropertyOptional({
        type: Date,
        title: 'Current date',
        required: false,
    })
    @IsOptional()
    currentDate?: Date;

    @ApiPropertyOptional({
        type: String,
        title: 'Period filter',
        required: false,
    })
    @IsOptional()
    @IsString()
    periodFilterType?: PeriodFilterType;

    @ApiPropertyOptional({
        type: SearchDataDto,
        title: 'Search data',
        required: false,
    })
    @IsOptional()
    searchData?: SearchDataDto;

    @ApiPropertyOptional({
        type: Array<String>,
        title: 'Muscle groups filter',
        required: false,
    })
    @IsOptional()
    @IsArray()
    muscleGroups?: ExerciseDto['primaryMuscleGroup'][];
}