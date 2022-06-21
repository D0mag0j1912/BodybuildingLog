import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthResponse } from 'src/models/auth/auth-response.model';
import { SignupDto } from 'src/models/auth/signup.model';
import { PreferencesDto } from 'src/models/preferences/preferences.model';
import { AuthService } from 'src/services/auth/auth.service';
import { ConfirmPasswordGuard } from '../../../guards/auth/confirm-password.guard';

@ApiTags('Authentication')
@Controller('auth/signup')
export class SignupController {

    constructor(
        private readonly authService: AuthService,
    ) { }

    @Post()
    @UseGuards(new ConfirmPasswordGuard('auth.errors.equal_passwords'))
    async signup(
        @Body('signupData') signupDto: SignupDto,
        @Body('preferences') preferencesDto: PreferencesDto,
    ): Promise<AuthResponse> {
        return this.authService.signup(
            preferencesDto,
            signupDto,
        );
    }
}