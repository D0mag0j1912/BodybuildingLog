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
    @IsOptional()
    @IsString()
    imageUrl: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    primaryMuscleGroup: string;

    @ApiProperty()
    @IsArray()
    @IsNotEmpty()
    availableSetCategories: SetCategoryType[];

    @ApiProperty()
    @IsArray()
    @IsNotEmpty()
    selectedSetCategories: SetCategoryType[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsMongoId()
    _id?: string;
}
