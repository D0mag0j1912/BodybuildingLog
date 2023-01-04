import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GeneralResponseDto } from '../../models/common/response.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';
import { PreferencesService } from '../../services/preferences/preferences.service';
import { PreferenceChangedType } from '../../models/preferences/preferences.type';

@ApiTags('Preferences')
@Controller('preferences')
@UseGuards(AuthGuard())
export class PreferencesController {
    constructor(private _preferencesService: PreferencesService) {}

    @ApiOkResponse({
        description: 'Returns preferences object to the client',
        status: 200,
        type: PreferencesDto,
    })
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Return internal server error message to the client',
    })
    @Get(':userId')
    async getPreferences(@Param('userId') userId: string): Promise<PreferencesDto> {
        return this._preferencesService.getPreferences(userId);
    }

    @ApiOkResponse({
        description: 'Returns confirmation message to the client',
        status: 200,
        type: GeneralResponseDto,
    })
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Return internal server error message to the client',
    })
    @Put(':userId')
    async setPreferences(
        @Body('preferences') preferencesDto: PreferencesDto,
        @Body('preferenceChanged') preferenceChanged: PreferenceChangedType,
        @Param('userId') userId: string,
    ): Promise<GeneralResponseDto> {
        return this._preferencesService.setPreferences(userId, preferencesDto, preferenceChanged);
    }
}
