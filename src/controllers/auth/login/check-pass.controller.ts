import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/models/auth/login.model';
import { AuthService } from 'src/services/auth/auth.service';

@ApiTags('Authentication')
@Controller('check_pass')
export class CheckPassController {

    constructor(
        private readonly authService: AuthService,
    ) {}

    @Get()
    async passwordFitsEmail(@Query() userDto: UserDto): Promise<boolean> {
        return this.authService.passwordFitsEmail(userDto);
    }
}