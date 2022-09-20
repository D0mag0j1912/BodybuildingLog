import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { SetCategoryType } from './new-training/set.model';

export const EXERCISE_SCHEMA = new Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: String,
    primaryMuscleGroup: {
        type: String,
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
    setCategories: {
        type: [String],
        required: true,
    },
    primarySetCategory: {
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
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    imageUrl: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    primaryMuscleGroup: string;

    @ApiProperty()
    @IsNotEmpty()
    translations: {
        hr: string;
        en: string;
    };

    @ApiProperty()
    @IsArray()
    @IsNotEmpty()
    setCategories: SetCategoryType[];

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    primarySetCategory: SetCategoryType;
}
