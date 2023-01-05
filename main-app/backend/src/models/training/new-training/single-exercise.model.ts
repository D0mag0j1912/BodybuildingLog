import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';
import { Schema } from 'mongoose';
import { EXERCISE_SCHEMA } from '../exercise.model';
import { ExerciseDto } from '../exercise.model';
import { SET_SCHEMA } from './set.model';
import { Set } from './set.model';

export const SINGLE_EXERCISE_SCHEMA = new Schema({
    exerciseData: {
        type: EXERCISE_SCHEMA,
        required: true,
    },
    sets: {
        type: [SET_SCHEMA],
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    availableExercises: {
        type: [EXERCISE_SCHEMA],
        required: true,
    },
});

export class SingleExerciseDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsMongoId()
    _id: string;

    @ApiProperty({ type: ExerciseDto })
    exerciseData: ExerciseDto;

    @ApiProperty()
    @ArrayMinSize(1, { message: 'training.new_training.errors.at_least_one_set' })
    @ValidateNested({ each: true })
    @Type(() => Set)
    sets: Set[];

    @ApiProperty()
    @IsNumber({}, { message: '@training.new_training.errors.total_numerical' })
    @IsNotEmpty({ message: '@training.new_training.errors.error_save_training' })
    total: number;

    @ApiProperty({ type: ExerciseDto })
    @ValidateNested({ each: true })
    @Type(() => ExerciseDto)
    availableExercises: ExerciseDto[];
}
