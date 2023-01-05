import { ApiProperty } from '@nestjs/swagger';
import { PreferenceChangedType } from './preferences.type';
import { RawPreferencesDto } from './raw-preferences.model';

export class SetPreferencesDto {
    @ApiProperty({
        description: 'Preferences data',
    })
    preferences: RawPreferencesDto;

    @ApiProperty({ type: String, description: 'Type of preferences that changed' })
    preferenceChanged: PreferenceChangedType;
}
