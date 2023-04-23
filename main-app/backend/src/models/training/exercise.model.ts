import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsInt, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { Translations } from '../common/translations.model';
import { SetCategoryType } from './new-training/set.type';
import { PrimaryMuscleGroupType } from './primary-muscle-group.type';

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
    numberOfSets: Number,
});

export class ExerciseDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        enum: [
            'Legs',
            'Core',
            'Back',
            'Chest',
            'Biceps',
            'Triceps',
            'Neck',
            'Forearm',
            'Glutes',
            'Shoulders',
            '',
        ],
        description: 'Enum describing exercise primary muscle group',
    })
    @IsNotEmpty()
    @IsString()
    primaryMuscleGroup: PrimaryMuscleGroupType;

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

    @ApiProperty({
        description: 'Exercise translation',
        type: Translations,
    })
    @IsNotEmpty()
    translations: Translations;

    @ApiPropertyOptional({
        type: Number,
        description: 'Number of sets for selected exercise',
    })
    @IsInt()
    @IsOptional()
    numberOfSets: number;

    @ApiPropertyOptional()
    @IsString()
    imageUrl: string;

    @ApiPropertyOptional({
        type: String,
        description: 'Exercise id',
    })
    @IsOptional()
    @IsString()
    @IsMongoId()
    _id?: string;
}
