import { PickType } from '@nestjs/swagger';
import { LoginResponseDto } from '../login/login-response.model';

export class SignupResponseDto extends PickType(LoginResponseDto, [
    'Success',
    'Message',
] as const) {}
