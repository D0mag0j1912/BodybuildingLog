import { ApiProperty } from '@nestjs/swagger';
import { PreferencesDto } from './preferences.model';
import { PreferenceChangedType } from './preferences.type';

export class UpdatePreferencesDto {
    @ApiProperty({
        description: 'Preferences data',
    })
    preferences: PreferencesDto;

    @ApiProperty({ type: String, description: 'Type of preferences that changed' })
    preferenceChanged: PreferenceChangedType;
}
