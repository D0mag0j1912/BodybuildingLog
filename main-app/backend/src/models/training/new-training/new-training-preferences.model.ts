import { PickType } from '@nestjs/swagger';
import { PreferencesDto } from '../../preferences/preferences.model';

export class NewTrainingPreferencesDto extends PickType(PreferencesDto, [
    'weightUnit',
    'setDurationUnit',
] as const) {}
