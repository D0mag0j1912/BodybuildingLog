import { Controller, Get, Query } from "@nestjs/common";
import { Login } from "src/models/auth/login.model";
import { AuthService } from "src/services/auth/auth.service";

@Controller('checkPass')
export class CheckPassController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Get()
    passwordFitsEmail(@Query() params: Login)
        : Promise<boolean> {
        return this.authService.passwordFitsEmail(
            params.email,
            params.password
        );
    }
}