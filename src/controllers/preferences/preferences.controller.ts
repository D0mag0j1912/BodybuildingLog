import { Body, Controller, HttpException, HttpStatus, Param, Put } from "@nestjs/common";
import { GeneralResponseData } from "src/app.service";
import { Preferences } from "src/models/preferences/preferences.model";
import { PreferencesService } from "src/services/preferences/preferences.service";

@Controller('preferences')
export class PreferencesController {

    constructor(
        private readonly preferencesService: PreferencesService
    ){}

    @Put(':userId')
    setPreferences(
        @Body('preferences') preferences: Preferences,
        @Param('userId') userId: string
    ): Promise<GeneralResponseData> {
        if(!userId){
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                message: 'preferences.errors.not_authenticated'
            }, HttpStatus.UNAUTHORIZED);
        }
        return this.preferencesService.setPreferences(
            userId,
            preferences.language,
            preferences.weightFormat
        ); 
    }
}