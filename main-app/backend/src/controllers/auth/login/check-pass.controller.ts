import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../../../models/auth/login/login.model';
import { AuthService } from '../../../services/auth/auth.service';

@ApiTags('Authentication')
@Controller('api/auth/check-pass')
export class CheckPassController {
    constructor(private _authService: AuthService) {}

    @Get()
    @ApiOkResponse({
        status: 200,
        description: 'Response returns boolean depends if password fits email',
    })
    async passwordFitsEmail(@Query() userDto: UserDto): Promise<boolean> {
        return this._authService.passwordFitsEmail(userDto);
    }
}
