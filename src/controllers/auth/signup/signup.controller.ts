import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { AuthResponse } from "src/models/auth/auth-response.model";
import { Signup } from "src/models/auth/signup.model";
import { Preferences } from "src/models/preferences/preferences.model";
import { AuthService } from "src/services/auth/auth.service";

@Controller('signup')
export class SignupController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Post()
    signup(
        @Body('signupData') signupData: Signup,
        @Body('preferences') preferences: Preferences
    ): Promise<AuthResponse> {
        if(signupData.password !== signupData.confirmPassword){
            throw new BadRequestException('auth.errors.equal_passwords');
        }
        return this.authService.signup(
            preferences.language,
            preferences.weightFormat,
            signupData.email,
            signupData.password
        );
    }
}