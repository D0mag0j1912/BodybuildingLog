import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';
import { Schema } from 'mongoose';
import { EXERCISE_SCHEMA } from '../exercise.model';
import { Exercise } from '../exercise.model';
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

export class SingleExercise {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsMongoId()
    _id: string;

    @ApiProperty()
    exerciseData: Exercise;

    @ApiProperty()
    @ValidateNested({ each: true })
    @Type(() => Set)
    sets: Set[];

    @ApiProperty()
    @IsNumber({}, { message: '@training.new_training.errors.total_numerical' })
    @IsNotEmpty({ message: '@training.new_training.errors.error_save_training' })
    total: number;

    @ApiProperty()
    @ValidateNested({ each: true })
    @Type(() => Exercise)
    availableExercises: Exercise[];
}
