import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('get_all_emails')
export class GetEmailsController {

    constructor(
        private readonly authService: AuthService,
    ){}

    @Get()
    async getEmails(@Query() params: {
        email: string
    }): Promise<boolean> {
        return this.authService.getAllEmails(params.email);
    }
}