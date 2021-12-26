import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneralResponseData } from '../../models/common/response.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';

@Injectable()
export class PreferencesService {

    constructor(
        @InjectModel('Preferences') private readonly preferencesModel: Model<PreferencesDto>,
    ) {}

    async setPreferences(
        userId: string,
        preferencesDto: PreferencesDto,
    ): Promise<GeneralResponseData> {
        try {
            const { language, weightFormat } = preferencesDto;
            // tslint:disable-next-line: await-promise
            const preferences = await this.preferencesModel.findOne({ userId: userId });
            preferences.language = language;
            preferences.weightFormat = weightFormat;
            await preferences.save();
            return { message: 'preferences.language_changed' } as GeneralResponseData;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('preferences.errors.language_change');
        }
    }
}