import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { SetCategoryType } from './new-training/set.type';

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
    availableSetCategories: {
        type: [String],
        required: true,
    },
    selectedSetCategories: {
        type: [String],
        required: true,
    },
});

export class ExerciseDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    imageUrl: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    primaryMuscleGroup: string;

    @ApiProperty({
        enum: [
            'dynamicBodyweight',
            'dynamicWeighted',
            'staticBodyweight',
            'staticWeighted',
            'freeWeighted',
        ],
        description: 'Enum describing available set categories',
        isArray: true,
    })
    @IsArray()
    @IsNotEmpty()
    availableSetCategories: SetCategoryType[];

    @ApiProperty({
        enum: [
            'dynamicBodyweight',
            'dynamicWeighted',
            'staticBodyweight',
            'staticWeighted',
            'freeWeighted',
        ],
        description: 'Enum describing selected set categories',
        isArray: true,
    })
    @IsArray()
    @IsNotEmpty()
    selectedSetCategories: SetCategoryType[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsMongoId()
    _id?: string;
}
