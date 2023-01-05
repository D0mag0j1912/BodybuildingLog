import { OmitType } from '@nestjs/swagger';
import { PreferencesDto } from './preferences.model';

export class RawPreferencesDto extends OmitType(PreferencesDto, ['_id'] as const) {}
