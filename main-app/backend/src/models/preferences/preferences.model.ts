import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { PeriodFilterType } from '../../models/training/past-trainings/period-filter.type';
import { SetDurationUnitType } from '../training/new-training/set.type';
import { LanguageCodeType, WeightUnitType } from './preferences.type';

export const PREFERENCES_SCHEMA = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    languageCode: {
        type: String,
        required: true,
    },
    weightUnit: {
        type: String,
        required: true,
    },
    showByPeriod: String,
    setDurationUnit: String,
    trainingSplitId: String,
});

export class PreferencesDto {
    @ApiProperty({
        enum: ['hr', 'en'],
        description: "User's current language code preference",
    })
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.language_required' })
    languageCode: LanguageCodeType;

    @ApiProperty({
        enum: ['lbs', 'kg'],
        description: "User's current weight unit preference",
    })
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.weight_unit_required' })
    weightUnit: WeightUnitType;

    @ApiPropertyOptional({
        enum: ['week', 'day'],
        description: "User's current past trainings period preference",
    })
    @IsOptional()
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.show_by_period_required' })
    showByPeriod?: PeriodFilterType;

    @ApiPropertyOptional({
        enum: ['seconds', 'minutes'],
        description: "User's current set duration unit preference",
    })
    @IsOptional()
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.set_duration_unit_required' })
    setDurationUnit?: SetDurationUnitType;

    @ApiPropertyOptional()
    @IsOptional()
    @IsMongoId()
    _id?: string;

    @ApiPropertyOptional({
        description: 'Id of authenticated user',
        type: String,
    })
    @IsOptional()
    @IsMongoId()
    userId?: string;

    @ApiPropertyOptional({
        description: 'Training split ID',
        type: String,
    })
    @IsOptional()
    @IsMongoId()
    trainingSplitId?: string;
}
