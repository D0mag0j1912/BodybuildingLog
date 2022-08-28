import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from '../../../models/auth/login.model';
import { AuthService } from '../../../services/auth/auth.service';

@ApiTags('Authentication')
@Controller('auth/check-pass')
export class CheckPassController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    async passwordFitsEmail(@Query() userDto: UserDto): Promise<boolean> {
        return this.authService.passwordFitsEmail(userDto);
    }
}
