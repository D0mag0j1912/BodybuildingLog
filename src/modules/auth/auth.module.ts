import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CheckPassController } from "src/controllers/auth/login/check-pass.controller";
import { LoginController } from "src/controllers/auth/login/login.controller";
import { GetEmailsController } from "src/controllers/auth/signup/get-emails.controller";
import { SignupController } from "src/controllers/auth/signup/signup.controller";
import { UserSchema } from "src/models/auth/login.model";
import { preferencesSchema } from "src/models/preferences/preferences.model";
import { AuthService } from '../../services/auth/auth.service';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'User',
            schema: UserSchema
        },
        {
            name: 'Preferences',
            schema: preferencesSchema
        }])
    ],
    controllers: [
        GetEmailsController,
        SignupController,
        LoginController,
        CheckPassController
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {}