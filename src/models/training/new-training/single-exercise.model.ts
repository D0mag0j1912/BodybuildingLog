import { Type } from 'class-transformer';
import {
    IsBoolean,
    IsDefined,
    IsInt,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested} from 'class-validator';
import { Schema } from 'mongoose';
import { EXERCISE_SCHEMA } from '../exercise.model';
import { Exercise } from '../exercise.model';
import { SET_SCHEMA } from './set.model';
import { Set } from './set.model';

export const SINGLE_EXERCISE_SCHEMA = new Schema({
    formArrayIndex: {
        type: Number,
        required: true,
    },
    exerciseName: {
        type: String,
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
    disabledTooltip: {
        type: Boolean,
        required: true,
    },
    availableExercises: {
        type: [EXERCISE_SCHEMA],
        required: true,
    },
});

export class SingleExercise {

    @IsOptional()
    @IsString()
    @IsMongoId()
    _id: string;

    @IsInt({ message: '@training.new_training.errors.error_save_training' })
    @IsDefined({ message: '@training.new_training.errors.error_save_training' })
    formArrayIndex: number;

    @IsString({ message: '@training.new_training.errors.exercise_name_string' })
    @IsNotEmpty({ message: '@training.new_training.errors.exercise_name_required' })
    exerciseName: string;

    @ValidateNested({ each: true })
    @Type(() => Set)
    sets: Set[];

    @IsNumber(
        {},
        { message: '@training.new_training.errors.total_numerical' },
    )
    @IsNotEmpty({ message: '@training.new_training.errors.error_save_training' })
    total: number;

    @IsBoolean({ message: '@training.new_training.errors.error_save_training' })
    @IsNotEmpty({ message: '@training.new_training.errors.error_save_training' })
    disabledTooltip: boolean;

    @ValidateNested({ each: true })
    @Type(() => Exercise)
    availableExercises: Exercise[];
}