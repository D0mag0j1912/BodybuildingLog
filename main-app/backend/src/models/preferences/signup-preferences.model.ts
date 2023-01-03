import { PickType } from '@nestjs/swagger';
import { PreferencesDto } from './preferences.model';

export class SignupPreferencesDto extends PickType(PreferencesDto, [
    'languageCode',
    'weightUnit',
]) {}
