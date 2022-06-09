import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneralResponseData } from '../../models/common/response.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';

@Injectable()
export class PreferencesService {

    constructor(
        @InjectModel('Preferences') private readonly preferencesModel: Model<PreferencesDto>,
    ) { }

    async setPreferences(
        userId: string,
        preferencesDto: PreferencesDto,
    ): Promise<GeneralResponseData> {
        try {
            const {
                LanguageCode: language,
                WeightFormat: weightFormat,
                ShowByPeriod: showByPeriod,
                PreferenceChanged: preferenceChanged,
            } = preferencesDto;
            const preferences = await this.preferencesModel.findOne({ UserId: userId }).exec();
            preferences.LanguageCode = language;
            preferences.WeightFormat = weightFormat;
            preferences.ShowByPeriod = showByPeriod;
            await preferences.save();
            switch (preferenceChanged) {
                case 'language': {
                    return { Message: 'preferences.language_changed' } as GeneralResponseData;
                }
                case 'showByPeriod': {
                    return { Message: '' } as GeneralResponseData;
                }
            }
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('preferences.errors.language_change');
        }
    }
}