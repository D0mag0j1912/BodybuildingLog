import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { CheckPassController } from '../../controllers/auth/login/check-pass.controller';
import { LoginController } from '../../controllers/auth/login/login.controller';
import { GetEmailsController } from '../../controllers/auth/signup/get-emails.controller';
import { SignupController } from '../../controllers/auth/signup/signup.controller';
import { USER_SCHEMA } from '../../models/auth/login/login.model';
import { PREFERENCES_SCHEMA } from '../../models/preferences/preferences.model';
import { JWT_TOKEN } from '../../constants/jwt-web-token';
import { JwtStrategy } from '../../middleware/jwt.strategy';
import { AuthService } from '../../services/auth/auth.service';

const CONTROLLERS = [GetEmailsController, SignupController, LoginController, CheckPassController];

const SERVICES = [AuthService, JwtStrategy];

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: JWT_TOKEN,
            signOptions: {
                expiresIn: 10800,
            },
        }),
        MongooseModule.forFeature([
            {
                name: 'User',
                schema: USER_SCHEMA,
            },
            {
                name: 'Preferences',
                schema: PREFERENCES_SCHEMA,
            },
        ]),
    ],
    controllers: [...CONTROLLERS],
    providers: [...SERVICES],
    exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
