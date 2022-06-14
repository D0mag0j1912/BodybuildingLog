import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString } from 'class-validator';
import { Schema } from 'mongoose';

export const NESTED_LANGUAGE_EXERCISE_SCHEMA = new Schema({
    hr: {
        type: String,
        required: true,
    },
    en: {
        type: String,
        required: true,
    },
});

export class NestedLanguageExercise {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    hr: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    en: string;
}
