import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/services/auth/auth.service';

@ApiTags('Authentication')
@Controller('get_all_emails')
export class GetEmailsController {

    constructor(
        private readonly authService: AuthService,
    ) {}

    @Get()
    async getEmails(@Query() params: { email: string }): Promise<boolean> {
        return this.authService.getAllEmails(params.email);
    }
}