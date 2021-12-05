import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Schema } from 'mongoose';

export const PREFERENCES_SCHEMA = new Schema({
    language: {
        type: String,
        required: true,
    },
    weightFormat: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

export class PreferencesDto {

    @IsOptional()
    @IsDefined({ message: '@common.errors.something_went_wrong' })
    @IsString({ message: '@common.errors.something_went_wrong' })
    userId: string;

    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.language_required' })
    language: string;

    @IsString({ message: '@common.errors.something_went_wrong' })
    @IsNotEmpty({ message: '@preferences.errors.weight_format_required' })
    weightFormat: string;
}
