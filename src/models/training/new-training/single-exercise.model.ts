import { Schema } from 'mongoose';
import { setSchema } from './set.model';
import { exerciseSchema } from '../exercise.model';
import { Type } from 'class-transformer';
import { 
    IsOptional, 
    IsString, 
    IsDefined, 
    IsInt, 
    ValidateNested, 
    IsNumber, 
    IsNotEmpty} from 'class-validator';
import { Exercise } from '../exercise.model';
import { Set } from './set.model';

export const singleExerciseSchema = new Schema({
    formArrayIndex: {
        type: Number,
        required: true
    },
    exerciseName: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    sets: {
        type: [setSchema],
        required: true
    },
    availableExercises: {
        type: [exerciseSchema],
        required: true
    }
});

export class SingleExercise {

    @IsOptional()
    @IsString()
    _id: string;

    @IsInt({
        message: '@training.new_training.errors.error_save_training'
    })
    @IsDefined({
        message: '@training.new_training.errors.error_save_training'
    })
    formArrayIndex: number;

    @IsString({
        message: '@training.new_training.errors.exercise_name_string'
    })
    @IsNotEmpty({
        message: '@training.new_training.errors.exercise_name_required'
    })
    exerciseName: string;

    @ValidateNested({
        each: true
    })
    @Type(() => Set)
    sets: Set[];

    @IsNumber({}, {
        message: '@training.new_training.errors.total_numerical'
    })
    @IsNotEmpty({
        message: '@training.new_training.errors.error_save_training'
    })
    total: number;

    @ValidateNested({
        each: true
    })
    @Type(() => Exercise)
    availableExercises: Exercise[];
}