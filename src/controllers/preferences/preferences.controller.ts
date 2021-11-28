import { Body, Controller, HttpException, HttpStatus, Param, Put, UseGuards } from '@nestjs/common';
import { GeneralResponseData } from 'src/app.service';
import { Preferences } from 'src/models/preferences/preferences.model';
import { PreferencesService } from 'src/services/preferences/preferences.service';
import { AuthenticationGuard } from '../../guards/authentication.guard';

@Controller('preferences')
//TODO: skontati zašto mi vraća not authenticated
@UseGuards(AuthenticationGuard)
export class PreferencesController {

    constructor(
        private readonly preferencesService: PreferencesService,
    ){}

    @Put(':userId')
    async setPreferences(
        @Body('preferences') preferences: Preferences,
        @Param('userId') userId: string,
    ): Promise<GeneralResponseData> {
        //TODO: izbrisati ovo kad implementiram Guard
        if(!userId){
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                message: 'common.errors.not_authenticated',
            }, HttpStatus.UNAUTHORIZED);
        }
        return this.preferencesService.setPreferences(
            userId as string,
            preferences.language as string,
            preferences.weightFormat as string,
        );
    }
}