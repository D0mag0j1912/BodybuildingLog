import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsMongoId,
    IsOptional,
    IsString } from 'class-validator';
import { Schema } from 'mongoose';

export const EXERCISE_SCHEMA = new Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    primaryMuscleGroup: {
        type: String,
        required: true,
    },
});

export class Exercise {

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsMongoId()
    _id: number;

    @ApiProperty()
    @IsDefined()
    @IsString()
    name: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    imageUrl: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    primaryMuscleGroup: string;
}
