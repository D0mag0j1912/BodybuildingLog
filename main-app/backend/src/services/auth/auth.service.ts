import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { compare, hash } from 'bcrypt';
import { Model } from 'mongoose';
import { UserDto } from '../../models/auth/login.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';
import { AuthResponse } from '../../models/auth/auth-response.model';
import { JwtPayload } from '../../models/auth/jwt-payload.model';
import { SignupDto } from '../../models/auth/signup.model';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDto>,
        @InjectModel('Preferences') private readonly preferencesModel: Model<PreferencesDto>,
        private readonly jwtService: JwtService,
    ) { }

    async passwordFitsEmail(userDto: UserDto): Promise<boolean> {
        try {
            const { Email: email, Password: password } = userDto;
            const user: UserDto = await this.userModel.findOne({ Email: email }).exec();
            if (!user) {
                return false;
            }
            const comparison: boolean = await compare(
                password,
                user.Password,
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
            const { Email: email, Password: password } = userDto;
            const user: UserDto = await this.userModel.findOne({ Email: email }).exec();
            if (!user) {
                return {
                    Success: false,
                    Message: 'auth.errors.email_not_registered',
                } as AuthResponse;
            }
            const comparison: boolean = await compare(
                password,
                user.Password,
            );
            if (!comparison) {
                return {
                    Success: false,
                    Message: 'auth.errors.password_wrong_email',
                } as AuthResponse;
            }
            const payload: JwtPayload = {
                email: user.Email,
                _id: user._id,
            };
            const accessToken: string = await Promise.resolve(this.jwtService.sign(payload));
            return {
                Token: accessToken,
                ExpiresIn: 10800,
                _id: user._id,
                Message: 'auth.login_success',
            } as AuthResponse;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('auth.errors.login_error');
        }
    }

    async getAllEmails(email: string): Promise<boolean> {
        try {
            const result: {
                _id: string;
                Password: string;
            } = await this.userModel.findOne(
                { Email: email },
                'password',
            ).exec();
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
            const { LanguageCode: language, WeightFormat: weightFormat } = preferencesDto;
            const { Email: email, Password: password, ConfirmPassword: confirmPassword } = signupDto;
            const encryptedPassword: string = await hash(password, 10);
            const user = new this.userModel({
                Email: email,
                Password: encryptedPassword,
            });
            const savedUser: UserDto = await user.save();
            const preferences: PreferencesDto = {
                UserId: savedUser._id,
                LanguageCode: language,
                WeightFormat: weightFormat,
                ShowByPeriod: null,
            };
            await this.preferencesModel.create(preferences);
            return {
                Success: true,
                Message: 'auth.signup_success',
            } as AuthResponse;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('auth.errors.signup_error');
        }
    }
}