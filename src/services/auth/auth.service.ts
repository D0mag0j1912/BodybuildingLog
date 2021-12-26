import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { compare, hash } from 'bcrypt';
import { Model } from 'mongoose';
import { AuthResponse } from 'src/models/auth/auth-response.model';
import { UserDto } from 'src/models/auth/login.model';
import { PreferencesDto } from 'src/models/preferences/preferences.model';
import { JwtPayload } from '../../models/auth/jwt-payload.model';
import { SignupDto } from '../../models/auth/signup.model';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDto>,
        @InjectModel('Preferences') private readonly preferencesModel: Model<PreferencesDto>,
        private readonly jwtService: JwtService,
    ) {}

    async passwordFitsEmail(userDto: UserDto): Promise<boolean> {
        try {
            const { email, password } = userDto;
            // tslint:disable-next-line: await-promise
            const user: UserDto = await this.userModel.findOne({ email: email });
            if (!user) {
                return false;
            }
            const comparison: boolean = await compare(
                password,
                user.password,
            );
            if (comparison) {
                return true;
            }
            return false;
        }
        catch (error: unknown) {
            return false;
        }
    }

    async login(userDto: UserDto): Promise<AuthResponse> {
        try {
            const { email, password } = userDto;
            // tslint:disable-next-line: await-promise
            const user: UserDto = await this.userModel.findOne({ email: email });
            if (!user) {
                return {
                    success: false,
                    message: 'auth.errors.email_not_registered',
                } as AuthResponse;
            }
            const comparison: boolean = await compare(
                password,
                user.password,
            );
            if (!comparison) {
                return {
                    success: false,
                    message: 'auth.errors.password_wrong_email',
                } as AuthResponse;
            }
            const payload: JwtPayload = {
                email: user.email,
                _id: user._id,
            };
            // tslint:disable-next-line: await-promise
            const accessToken: string = await this.jwtService.sign(payload);
            // tslint:disable-next-line: await-promise
            const preferences: PreferencesDto = await this.preferencesModel.findOne({ userId: user._id });
            return {
                token: accessToken,
                expiresIn: 10800,
                _id: user._id,
                message: 'auth.login_success',
                preferences: preferences,
            } as AuthResponse;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('auth.errors.login_error');
        }
    }

    async getAllEmails(email: string): Promise<boolean> {
        try {
            const result: {
                _id: string,
                password: string
            // tslint:disable-next-line: await-promise
            } = await this.userModel.findOne(
                { email: email },
                'password',
            );
            if (!result) {
                return true;
            }
            return false;
        }
        catch (error: unknown) {
            return false;
        }
    }

    async signup(
        preferencesDto: PreferencesDto,
        signupDto: SignupDto,
    ): Promise<AuthResponse> {
        try {
            const { language, weightFormat } = preferencesDto;
            const { email, password, confirmPassword } = signupDto;
            const encryptedPassword: string = await hash(password, 10);
            const user = new this.userModel({
                email: email,
                password: encryptedPassword,
            });
            const savedUser: UserDto = await user.save();
            const preferences: PreferencesDto = {
                userId: savedUser._id,
                language: language,
                weightFormat: weightFormat,
            } as PreferencesDto;
            await this.preferencesModel.create(preferences);
            return {
                success: true,
                message: 'auth.signup_success',
            } as AuthResponse;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('auth.errors.signup_error');
        }
    }
}