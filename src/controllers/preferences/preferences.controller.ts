import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from '../../guards/authentication.guard';
import { GeneralResponseData } from '../../models/common/response.model';
import { Preferences } from '../../models/preferences/preferences.model';
import { PreferencesService } from '../../services/preferences/preferences.service';

@Controller('preferences')
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
        return this.preferencesService.setPreferences(
            userId as string,
            preferences.language as string,
            preferences.weightFormat as string,
        );
    }
}