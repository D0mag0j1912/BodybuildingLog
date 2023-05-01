import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isNeverCheck } from '../../helpers/is-never-check';
import { GeneralResponseDto } from '../../models/common/response.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';
import { PreferenceChangedType } from '../../models/preferences/preferences.type';

@Injectable()
export class PreferencesService {
    constructor(@InjectModel('Preferences') private _preferencesModel: Model<PreferencesDto>) {}

    async getPreferences(userId: string): Promise<PreferencesDto> {
        try {
            const preferences = await this._preferencesModel.findOne({ userId: userId }).exec();
            return preferences;
        } catch {
            throw new InternalServerErrorException('common.errors.something_went_wrong');
        }
    }

    async setPreferences(
        userId: string,
        preferencesDto: PreferencesDto,
        preferenceChanged: PreferenceChangedType,
    ): Promise<GeneralResponseDto> {
        try {
            const { languageCode, weightUnit, showByPeriod, setDurationUnit, trainingSplitId } =
                preferencesDto;
            const preferences = await this._preferencesModel.findOne({ userId: userId }).exec();
            preferences.languageCode = languageCode;
            preferences.weightUnit = weightUnit;
            preferences.showByPeriod = showByPeriod;
            preferences.setDurationUnit = setDurationUnit;
            if (preferenceChanged === 'trainingSplit') {
                preferences.trainingSplitId = trainingSplitId;
            }
            await preferences.save();
            switch (preferenceChanged) {
                case 'language': {
                    return { Message: 'preferences.language_changed' } as GeneralResponseDto;
                }
                case 'showByPeriod': {
                    return { Message: '' } as GeneralResponseDto;
                }
                case 'weightUnit': {
                    return { Message: 'preferences.weight_unit_changed' } as GeneralResponseDto;
                }
                case 'setDurationUnit': {
                    return {
                        Message: 'preferences.set_duration_unit_changed',
                    } as GeneralResponseDto;
                }
                case 'trainingSplit': {
                    return { Message: '' } as GeneralResponseDto;
                }
                default: {
                    isNeverCheck(preferenceChanged);
                }
            }
        } catch (error: unknown) {
            switch (preferenceChanged) {
                case 'language': {
                    throw new InternalServerErrorException('preferences.errors.language_change');
                }
                case 'showByPeriod': {
                    throw new InternalServerErrorException('preferences.errors.period_change');
                }
                case 'weightUnit': {
                    throw new InternalServerErrorException('preferences.errors.weight_unit_change');
                }
                case 'setDurationUnit': {
                    throw new InternalServerErrorException(
                        'preferences.errors.set_duration_unit_change',
                    );
                }
                case 'trainingSplit': {
                    throw new InternalServerErrorException(
                        'preferences.errors.training_split_change',
                    );
                }
                default: {
                    isNeverCheck(preferenceChanged);
                }
            }
        }
    }
}
