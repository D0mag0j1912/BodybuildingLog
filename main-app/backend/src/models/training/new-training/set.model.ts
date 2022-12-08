import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, IsOptional, IsString, Max, Min, NotEquals } from 'class-validator';
import { Schema } from 'mongoose';

export const SET_SCHEMA = new Schema({
    setNumber: {
        type: Number,
        required: true,
    },
    weight: Number,
    reps: Number,
    duration: Number,
});

export class Set {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsMongoId()
    _id: string;

    @ApiProperty()
    @Min(1, { message: '@training.new_training.errors.error_save_training' })
    @Max(50, { message: '@training.new_training.errors.set_number_max' })
    @IsNumber({}, { message: '@training.new_training.errors.error_save_training' })
    @NotEquals(0, { message: '@training.new_training.errors.error_save_training' })
    setNumber: number;

    @ApiProperty()
    @IsOptional()
    @Min(1, {
        message: '@training.new_training.errors.weight_min',
    })
    @Max(1000, { message: '@training.new_training.errors.weight_max' })
    @IsNumber({}, { message: '@training.new_training.errors.weight_number' })
    @NotEquals(0, { message: '@training.new_training.errors.weight_required' })
    weight: number;

    @ApiProperty()
    @IsOptional()
    @Min(1, {
        message: '@training.new_training.errors.reps_min',
    })
    @Max(1000, {
        message: '@training.new_training.errors.reps_max',
    })
    @IsNumber(
        {},
        {
            message: '@training.new_training.errors.reps_number',
        },
    )
    @NotEquals(0, {
        message: '@training.new_training.errors.reps_required',
    })
    reps: number;

    @ApiProperty()
    @IsOptional()
    @Min(1, {
        message: '@training.new_training.errors.duration_min',
    })
    @IsNumber(
        {},
        {
            message: '@training.new_training.errors.duration_number',
        },
    )
    @NotEquals(0, {
        message: '@training.new_training.errors.duration_required',
    })
    duration: number;
}
