import {
    IsDefined,
    IsOptional,
    IsString } from 'class-validator';
import { Schema } from 'mongoose';

export const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    primaryMuscleGroup: {
        type: String,
        required: true
    }
});

export class Exercise {

    @IsOptional()
    @IsString()
    _id: number;

    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsString()
    imageUrl: string;

    @IsDefined()
    @IsString()
    primaryMuscleGroup: string;
}
