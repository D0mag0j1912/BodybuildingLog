import { Controller, Get, Query } from '@nestjs/common';
import { Login } from 'src/models/auth/login.model';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('check_pass')
export class CheckPassController {

    constructor(
        private readonly authService: AuthService,
    ){}

    @Get()
    async passwordFitsEmail(@Query() params: Login)
        : Promise<boolean> {
        return this.authService.passwordFitsEmail(
            params.email as string,
            params.password as string
        );
    }
}