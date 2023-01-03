import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiInternalServerErrorResponse,
    ApiTags,
} from '@nestjs/swagger';
import { AuthService } from '../../../services/auth/auth.service';
import { ConfirmPasswordGuard } from '../../../guards/auth/confirm-password.guard';
import { SignupResponseDto } from '../../../models/auth/signup/signup-response.model';
import { SignupRequestDto } from '../../../models/auth/signup/signup-request.model';

@ApiTags('Authentication')
@Controller('auth/signup')
export class SignupController {
    constructor(private _authService: AuthService) {}

    @ApiCreatedResponse({ type: SignupResponseDto })
    @ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal server error',
    })
    @ApiBadRequestResponse({
        status: 404,
        description: 'Bad request from client',
    })
    @Post()
    @UseGuards(new ConfirmPasswordGuard('auth.errors.equal_passwords'))
    async signup(@Body() data: SignupRequestDto): Promise<SignupResponseDto> {
        return this._authService.signup(data);
    }
}
