import { ApiExtraModels, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { SearchDataDto } from '../../common/search-data.model';
import { ExerciseDto } from '../exercise.model';
import { PeriodFilterType } from './period-filter.type';

@ApiExtraModels(PastTrainingsPayload)
export class PastTrainingsPayload {
    @ApiPropertyOptional({
        type: Date,
        title: 'Current date'
    })
    @IsOptional()
    currentDate?: Date;

    @ApiPropertyOptional({
        type: String,
        title: 'Period filter',
    })
    @IsOptional()
    @IsString()
    periodFilterType?: PeriodFilterType;

    @ApiPropertyOptional({
        type: Object,
        title: 'Search data',
    })
    @IsOptional()
    searchData?: SearchDataDto;

    @ApiPropertyOptional({
        type: Array<String>,
        title: 'Muscle groups filter',
    })
    @IsOptional()
    @IsArray()
    muscleGroups?: ExerciseDto['primaryMuscleGroup'][];
}