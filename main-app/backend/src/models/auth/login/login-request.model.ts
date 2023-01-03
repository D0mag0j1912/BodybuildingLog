import { OmitType } from '@nestjs/swagger';
import { UserDto } from './login.model';

export class LoginRequestDto extends OmitType(UserDto, ['_id'] as const) {}
