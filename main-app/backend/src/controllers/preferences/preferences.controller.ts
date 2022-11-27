import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GeneralResponseData } from '../../models/common/response.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';
import { PreferencesService } from '../../services/preferences/preferences.service';
import { PreferenceChangedType } from '../../models/preferences/preferences.type';

@ApiTags('Preferences')
@Controller('preferences')
@UseGuards(AuthGuard())
export class PreferencesController {
    constructor(private _preferencesService: PreferencesService) {}

    @Get(':userId')
    async getPreferences(@Param('userId') userId: string): Promise<PreferencesDto> {
        return this._preferencesService.getPreferences(userId);
    }

    @Put(':userId')
    async setPreferences(
        @Body('preferences') preferencesDto: PreferencesDto,
        @Body('preferenceChanged') preferenceChanged: PreferenceChangedType,
        @Param('userId') userId: string,
    ): Promise<GeneralResponseData> {
        return this._preferencesService.setPreferences(userId, preferencesDto, preferenceChanged);
    }
}
