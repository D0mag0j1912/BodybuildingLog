import { Controller, Get, Query } from '@nestjs/common';
import { LoginDto } from 'src/models/auth/login.model';
import { AuthService } from 'src/services/auth/auth.service';

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