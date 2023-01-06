import { ApiProperty } from '@nestjs/swagger';
import { PreferenceChangedType } from './preferences.type';
import { PreferencesDto } from './preferences.model';

export class SetPreferencesDto {
    @ApiProperty({
        description: 'Preferences data',
    })
    preferences: PreferencesDto;

    @ApiProperty({ type: String, description: 'Type of preferences that changed' })
    preferenceChanged: PreferenceChangedType;
}
