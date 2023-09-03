import { ApiProperty } from '@nestjs/swagger';
import { PreferencesDto } from './preferences.model';
import { PreferenceChangedType } from './preferences.type';

export class UpdatePreferencesDto {
    @ApiProperty({
        type: PreferencesDto,
        required: true,
        description: 'Preferences data',
    })
    preferences: PreferencesDto;

    @ApiProperty({
        enum: ['language', 'showByPeriod', 'weightUnit', 'setDurationUnit', 'trainingSplit'],
        description: 'Type of the preference that changed',
        required: true,
    })
    preferenceChanged: PreferenceChangedType;
}
