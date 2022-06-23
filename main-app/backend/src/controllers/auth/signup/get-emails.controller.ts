import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../../services/auth/auth.service';
import { GetAllEmails } from '../../../models/auth/signup/get-all-email.model';

@ApiTags('Authentication')
@Controller('auth/get-all-emails')
export class GetEmailsController {

    constructor(
        private readonly authService: AuthService,
    ) { }

    @Get()
    async getEmails(@Query() params: GetAllEmails): Promise<boolean> {
        return this.authService.getAllEmails(params.email);
    }
}