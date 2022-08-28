import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignupDto } from '../../../models/auth/signup/signup.model';
import { PreferencesDto } from '../../../models/preferences/preferences.model';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthResponse } from '../../../models/auth/auth-response.model';
import { ConfirmPasswordGuard } from '../../../guards/auth/confirm-password.guard';

@ApiTags('Authentication')
@Controller('auth/signup')
export class SignupController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    @UseGuards(new ConfirmPasswordGuard('auth.errors.equal_passwords'))
    async signup(
        @Body('signupData') signupDto: SignupDto,
        @Body('preferences') preferencesDto: PreferencesDto,
    ): Promise<AuthResponse> {
        return this.authService.signup(preferencesDto, signupDto);
    }
}
