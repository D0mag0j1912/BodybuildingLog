import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Schema } from 'mongoose';

export type LanguageCode = 'hr' | 'en';
export type WeightFormat = 'lbs' | 'kg';

export const PREFERENCES_SCHEMA = new Schema({
    Language: {
        type: String,
        required: true,
    },
    WeightFormat: {
        type: String,
        required: true,
    },
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

export class PreferencesDto {

    @ApiProperty({ required: false })
    @IsOptional()
    @IsDefined({ message: '@common.errors.something_went_wrong' })
    @IsString({ message: '@common.errors.something_went_wrong' })
    UserId: string;

    @ApiProperty()
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.language_required' })
    LanguageCode: LanguageCode;

    @ApiProperty()
    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.weight_format_required' })
    WeightFormat: WeightFormat;
}
