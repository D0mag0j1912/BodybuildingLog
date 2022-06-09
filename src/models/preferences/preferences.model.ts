import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { PeriodFilterType } from '../training/past-trainings/past-trainings.model';

export type LanguageCode = 'hr' | 'en';
export type WeightFormat = 'lbs' | 'kg';
export type PreferenceChangedType = 'language' | 'showByPeriod';

export const PREFERENCES_SCHEMA = new Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    LanguageCode: {
        type: String,
        required: true,
    },
    WeightFormat: {
        type: String,
        required: true,
    },
    ShowByPeriod: String,
});

export class PreferencesDto {

    @ApiProperty()
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.language_required' })
    LanguageCode: LanguageCode;

    @ApiProperty()
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.weight_format_required' })
    WeightFormat: WeightFormat;

    @ApiProperty()
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@common.errors.something_went_wrong' })
    PreferenceChanged: PreferenceChangedType;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: '@common.errors.something_went_wrong' })
    ShowByPeriod: PeriodFilterType;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsDefined({ message: '@common.errors.something_went_wrong' })
    @IsString({ message: '@common.errors.something_went_wrong' })
    UserId: string;
}
