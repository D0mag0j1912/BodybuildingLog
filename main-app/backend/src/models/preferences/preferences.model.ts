import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { PeriodFilterType } from '../../models/training/past-trainings/period-filter.type';
import { LanguageCode, WeightUnit } from './preferences.type';

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
});

export class PreferencesDto {
    @ApiProperty()
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.language_required' })
    languageCode: LanguageCode;

    @ApiProperty()
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.weight_unit_required' })
    weightUnit: WeightUnit;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: '@common.errors.something_went_wrong' })
    showByPeriod: PeriodFilterType;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsDefined({ message: '@common.errors.something_went_wrong' })
    @IsString({ message: '@common.errors.something_went_wrong' })
    userId: string;
}
