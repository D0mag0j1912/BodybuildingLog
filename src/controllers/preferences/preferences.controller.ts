import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../guards/authentication.guard';
import { GeneralResponseData } from '../../models/common/response.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';
import { PreferencesService } from '../../services/preferences/preferences.service';

@ApiTags('Preferences')
@Controller('preferences')
@UseGuards(AuthenticationGuard)
export class PreferencesController {

    constructor(
        private readonly preferencesService: PreferencesService,
    ) {}

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