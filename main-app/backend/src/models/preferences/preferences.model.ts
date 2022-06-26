import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { PeriodFilterType } from '../training/past-trainings/past-trainings.model';
import { LanguageCode, WeightFormat } from './preferences.type';

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
    weightFormat: {
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
    @IsNotEmpty({ message: '@preferences.errors.weight_format_required' })
    weightFormat: WeightFormat;

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
