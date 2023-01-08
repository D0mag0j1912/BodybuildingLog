import { Body, Controller, Post } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiInternalServerErrorResponse,
    ApiTags,
} from '@nestjs/swagger';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginResponseDto } from '../../../models/auth/login/login-response.model';
import { LoginRequestDto } from '../../../models/auth/login/login-request.model';
@ApiTags('Authentication')
@Controller('auth/login')
export class LoginController {
    constructor(private _authService: AuthService) {}

    @ApiCreatedResponse({ type: LoginResponseDto })
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiBadRequestResponse({
        status: 404,
        description: 'Bad request from client',
    })
    @Post()
    async login(@Body() userDto: LoginRequestDto): Promise<LoginResponseDto> {
        return this._authService.login(userDto);
    }
}
