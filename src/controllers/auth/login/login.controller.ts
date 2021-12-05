import { Body, Controller, Post } from '@nestjs/common';
import { AuthResponse } from 'src/models/auth/auth-response.model';
import { LoginDto } from 'src/models/auth/login.model';
import { AuthService } from 'src/services/auth/auth.service';
@Controller('login')
export class LoginController {

    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post()
    async login(@Body() loginDto: LoginDto): Promise<AuthResponse> {
        return this.authService.login(loginDto);
    }
}