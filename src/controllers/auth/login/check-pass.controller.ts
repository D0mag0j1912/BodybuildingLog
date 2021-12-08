import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/models/auth/login.model';
import { AuthService } from 'src/services/auth/auth.service';

@ApiTags('Authentication')
@Controller('check_pass')
export class CheckPassController {

    constructor(
        private readonly authService: AuthService,
    ) {}

    @Get()
    async passwordFitsEmail(@Query() loginDto: LoginDto): Promise<boolean> {
        return this.authService.passwordFitsEmail(loginDto);
    }
}