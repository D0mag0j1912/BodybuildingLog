import { Type } from 'class-transformer';
import {
    IsBoolean,
    IsDateString,
    IsDefined,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
    ValidateNested} from 'class-validator';
import { Schema } from 'mongoose';
import { SingleExercise, SINGLE_EXERCISE_SCHEMA } from './single-exercise.model';

export const NEW_TRAINING_SCHEMA = new Schema({
    exercise: {
        type: [SINGLE_EXERCISE_SCHEMA],
        required: true,
    },
    editMode: {
        type: Boolean,
        required: true,
    },
    bodyweight: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

export class NewTraining {

    @IsOptional()
    @IsString({ message: '@training.new_training.errors.error_save_training' })
    @IsDefined({ message: '@training.new_training.errors.error_save_training' })
    _id: string;

    @ValidateNested({ each: true })
    @Type(() => SingleExercise)
    exercise: SingleExercise[];

    @IsBoolean({ message: '@training.new_training.errors.error_save_training' })
    @IsDefined()
    editMode: boolean;

    @IsOptional()
    @IsNumber({}, {
        message: '@training.new_training.errors.bodyweight_number',
    })
    @Min(30, {
        message: '@training.new_training.errors.bodyweight_min',
    })
    @Max(300, {
        message: '@training.new_training.errors.bodyweight_max',
    })
    bodyweight: number;

    @IsOptional()
    @IsDateString({}, {
        message: '@common.errors.invalid_date',
    })
    createdAt: Date;

    @IsOptional()
    @IsDateString({}, {
        message: '@common.errors.invalid_date',
    })
    updatedAt: Date;

    @IsNotEmpty({
        message: '@common.errors.not_authenticated',
    })
    userId: string;
}
