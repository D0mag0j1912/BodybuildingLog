import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    IsBoolean,
    IsDateString,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
    ValidateNested,
} from 'class-validator';
import { Schema } from 'mongoose';
import { NewTrainingPreferencesDto } from './new-training-preferences.model';
import { SingleExerciseDto, SINGLE_EXERCISE_SCHEMA } from './single-exercise.model';

export const NEW_TRAINING_SCHEMA = new Schema({
    exercises: {
        type: [SINGLE_EXERCISE_SCHEMA],
        required: true,
    },
    editMode: {
        type: Boolean,
        required: true,
    },
    bodyweight: Number,
    trainingDate: {
        type: Date,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    preferences: {
        weightUnit: {
            type: String,
            required: true,
        },
        setDurationUnit: {
            type: String,
            required: true,
        },
    },
});

export class NewTrainingDto {
    @ApiProperty({
        type: [SingleExerciseDto],
        description: 'Training exercises data',
        required: true,
    })
    @ArrayMinSize(1, { message: 'training.new_training.errors.at_least_one_exercise' })
    @ValidateNested({ each: true })
    @Type(() => SingleExerciseDto)
    @IsArray()
    exercises: SingleExerciseDto[];

    @ApiProperty({
        description: "Whether it's edit mode or not",
        type: Boolean,
        required: true,
    })
    @IsBoolean({ message: '@training.new_training.errors.error_save_training' })
    @IsNotEmpty()
    editMode: boolean;

    @ApiProperty({ description: 'Training date', type: Date, required: true })
    @IsDateString(
        {},
        {
            message: '@common.errors.invalid_date',
        },
    )
    trainingDate: Date;

    @ApiProperty({
        description: 'Id of authenticated user',
        type: String,
        required: true,
    })
    @IsNotEmpty({ message: '@common.errors.not_authenticated' })
    userId: string;

    @ApiProperty({
        type: NewTrainingPreferencesDto,
        description: 'Training preferences',
        required: true,
    })
    @IsNotEmpty()
    preferences: NewTrainingPreferencesDto;

    @ApiPropertyOptional({
        type: String,
        title: 'Training ID',
        required: false,
    })
    @IsString({ message: '@training.new_training.errors.error_save_training' })
    @IsMongoId()
    @IsOptional()
    _id?: string;

    @ApiPropertyOptional({
        description: "User's bodyweight",
        type: Number,
        required: false,
    })
    @IsOptional()
    @IsNumber(
        {},
        {
            message: '@training.new_training.errors.bodyweight_number',
        },
    )
    @Min(30, {
        message: '@training.new_training.errors.bodyweight_min',
    })
    @Max(300, {
        message: '@training.new_training.errors.bodyweight_max',
    })
    bodyweight?: number;
}
