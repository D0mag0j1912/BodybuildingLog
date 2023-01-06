import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
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
});

export class PreferencesDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsDefined()
    @IsMongoId()
    _id: string;

    @ApiPropertyOptional({
        description: 'Id of authenticated user',
        type: String,
    })
    @IsOptional()
    @IsDefined({ message: '@common.errors.something_went_wrong' })
    @IsString({ message: '@common.errors.something_went_wrong' })
    userId: string;

    @ApiProperty({ description: "User's current language code preference" })
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.language_required' })
    languageCode: LanguageCodeType;

    @ApiProperty({ description: "User's current weight unit preference" })
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.weight_unit_required' })
    weightUnit: WeightUnitType;

    @ApiPropertyOptional({ description: "User's current past trainings period preference" })
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.show_by_period_required' })
    showByPeriod: PeriodFilterType;

    @ApiPropertyOptional({ description: "User's current set duration unit preference" })
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.set_duration_unit_required' })
    setDurationUnit: SetDurationUnitType;
}
