import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsMongoId,
    IsOptional,
    IsString } from 'class-validator';
import { Schema } from 'mongoose';

export const EXERCISE_SCHEMA = new Schema({
    Name: {
        type: String,
        required: true,
    },
    ImageUrl: String,
    PrimaryMuscleGroup: {
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
    Name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ImageUrl: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    PrimaryMuscleGroup: string;
}
