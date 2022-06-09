import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GeneralResponseData } from '../../models/common/response.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';
import { PreferencesService } from '../../services/preferences/preferences.service';

@ApiTags('Preferences')
@Controller('preferences')
@UseGuards(AuthGuard())
export class PreferencesController {

    constructor(
        private readonly preferencesService: PreferencesService,
    ) {}

    @Get(':userId')
    async getPreferences(@Param('userId') userId: string): Promise<PreferencesDto> {
        return this.preferencesService.getPreferences(userId);
    }

    @Put(':userId')
    async setPreferences(
        @Body('preferences') preferencesDto: PreferencesDto,
        @Param('userId') userId: string,
    ): Promise<GeneralResponseData> {
        return this.preferencesService.setPreferences(
            userId,
            preferencesDto,
        );
    }
}