import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../../services/auth/auth.service';
import { GetAllEmailsDto } from '../../../models/auth/signup/get-all-email.model';

@ApiTags('Authentication')
@Controller('api/auth/get-all-emails')
export class GetEmailsController {
    constructor(private _authService: AuthService) {}

    @ApiOkResponse({
        status: 200,
        description: 'Boolean indicating whether email already exists in database',
    })
    @Get()
    async getEmails(@Query() params: GetAllEmailsDto): Promise<boolean> {
        return this._authService.getAllEmails(params.email);
    }
}
