import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    IsString,
    ValidateNested} from 'class-validator';
import { Schema } from 'mongoose';
import { NestedLanguageExercise } from './nested-language-exercise.model';

export const TRANSLATION_EXERCISE_SCHEMA = new Schema({
    name: {
        type: String,
        ref: 'Exercise',
        required: true,
    },
    translations: {
        hr: {
            type: String,
            required: true,
        },
        en: {
            type: String,
            required: true,
        },
    },
});

export class TranslationExercise {

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsMongoId()
    _id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ValidateNested({ each: true })
    @Type(() => NestedLanguageExercise)
    translations: NestedLanguageExercise;
}
