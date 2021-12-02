import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneralResponseData } from '../../models/common/response.model';
import { Preferences } from '../../models/preferences/preferences.model';

@Injectable()
export class PreferencesService {

    constructor(
        @InjectModel('Preferences') private readonly preferencesModel: Model<Preferences>,
    ){}

    async setPreferences(
        userId: string,
        language: string,
        weightFormat: string,
    ): Promise<GeneralResponseData> {
        try {
            // tslint:disable-next-line: await-promise
            const preferences = await this.preferencesModel.findOne({ userId: userId });
            preferences.language = language;
            preferences.weightFormat = weightFormat;
            await preferences.save();
            return { message: 'preferences.language_changed' } as GeneralResponseData;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'preferences.errors.language_change',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}