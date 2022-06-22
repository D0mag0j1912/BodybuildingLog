import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../../../models/auth/login.model';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthResponse } from '../../../models/auth/auth-response.model';
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