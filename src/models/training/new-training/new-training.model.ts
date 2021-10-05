import { Type } from 'class-transformer';
import { 
    IsDefined, 
    IsDateString, 
    IsBoolean, 
    IsOptional, 
    IsString, 
    Min, 
    Max, 
    ValidateNested, 
    IsNumber } from 'class-validator';
import { Schema } from 'mongoose';
import { SingleExercise, singleExerciseSchema } from './single-exercise.model';

export const newTrainingSchema = new Schema({
    exercise: {
        type: [singleExerciseSchema],
        required: true
    },
    editMode: {
        type: Boolean,
        required: true
    },
    bodyweight: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

export class NewTraining {

    @IsBoolean({
        message: '@training.new_training.errors.error_save_training'
    })
    @IsDefined()
    editMode: boolean;

    @IsOptional()
    @IsString({
        message: '@training.new_training.errors.error_save_training'
    })
    @IsDefined({
        message: '@training.new_training.errors.error_save_training'
    })
    _id: string;

    @IsOptional()
    @IsNumber({}, {
        message: '@training.new_training.errors.bodyweight_number'
    })
    @Min(30, {
        message: '@training.new_training.errors.bodyweight_min'
    })
    @Max(300, {
        message: '@training.new_training.errors.bodyweight_max'
    })
    bodyweight: number;

    @ValidateNested({
        each: true
    })
    @Type(() => SingleExercise)
    exercise: SingleExercise[]

    @IsOptional()
    @IsDateString({}, {
        message: '@common.errors.invalid_date'
    })
    createdAt: Date;

    @IsOptional()
    @IsDateString({}, {
        message: '@common.errors.invalid_date'
    })
    updatedAt: Date;
}
