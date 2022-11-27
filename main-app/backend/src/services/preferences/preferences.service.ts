import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneralResponseData } from '../../models/common/response.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';
import { PreferenceChangedType } from '../../models/preferences/preferences.type';

@Injectable()
export class PreferencesService {
    constructor(@InjectModel('Preferences') private _preferencesModel: Model<PreferencesDto>) {}

    async getPreferences(userId: string): Promise<PreferencesDto> {
        const preferences = await this._preferencesModel.findOne({ userId: userId }).exec();
        return preferences;
    }

    async setPreferences(
        userId: string,
        preferencesDto: PreferencesDto,
        preferenceChanged: PreferenceChangedType,
    ): Promise<GeneralResponseData> {
        try {
            const { languageCode, weightUnit, showByPeriod, setDurationUnit } = preferencesDto;
            const preferences = await this._preferencesModel.findOne({ userId: userId }).exec();
            preferences.languageCode = languageCode;
            preferences.weightUnit = weightUnit;
            preferences.showByPeriod = showByPeriod;
            preferences.setDurationUnit = setDurationUnit;
            await preferences.save();
            switch (preferenceChanged) {
                case 'language': {
                    return { Message: 'preferences.language_changed' } as GeneralResponseData;
                }
                case 'showByPeriod': {
                    return { Message: '' } as GeneralResponseData;
                }
                case 'weightUnit': {
                    return { Message: 'preferences.weight_unit_changed' } as GeneralResponseData;
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
            }
        }
    }
}
