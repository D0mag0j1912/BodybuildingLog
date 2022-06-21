import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthResponse } from 'src/models/auth/auth-response.model';
import { UserDto } from 'src/models/auth/login.model';
import { AuthService } from 'src/services/auth/auth.service';
@ApiTags('Authentication')
@Controller('auth/login')
export class LoginController {

    constructor(
        private readonly authService: AuthService,
    ) { }

    //TODO
    /* @ApiCreatedResponse({ type: LoginDto }) */
    @Post()
    async login(@Body() userDto: UserDto): Promise<AuthResponse> {
        return this.authService.login(userDto);
    }
}