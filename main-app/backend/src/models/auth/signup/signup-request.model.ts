import { IntersectionType } from '@nestjs/swagger';
import { SignupPreferencesDto } from '../../preferences/signup-preferences.model';
import { SignupDto } from './signup.model';

export class SignupRequestDto extends IntersectionType(SignupDto, SignupPreferencesDto) {}
