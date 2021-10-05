import { Body, Controller, Post } from "@nestjs/common";
import { AuthResponse } from "src/models/auth/auth-response.model";
import { Login } from "src/models/auth/login.model";
import { AuthService } from "src/services/auth/auth.service";
@Controller('login')
export class LoginController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Post()
    login(
        @Body() authRequestData: Login
    ): Promise<AuthResponse> {
        return this.authService.login(
            authRequestData.email,
            authRequestData.password
        );
    }
}