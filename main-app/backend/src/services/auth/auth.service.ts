import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { compare, hash } from 'bcrypt';
import { Model } from 'mongoose';
import { UserDto } from '../../models/auth/login.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';
import { AuthResponse } from '../../models/auth/auth-response.model';
import { JwtPayload } from '../../models/auth/jwt-payload.model';
import { SignupDto } from '../../models/auth/signup/signup.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDto>,
        @InjectModel('Preferences') private readonly preferencesModel: Model<PreferencesDto>,
        private readonly jwtService: JwtService,
    ) {}

    async passwordFitsEmail(userDto: UserDto): Promise<boolean> {
        try {
            const { email: email, password: password } = userDto;
            const user: UserDto = await this.userModel.findOne({ email: email }).exec();
            if (!user) {
                return false;
            }
            const comparison: boolean = await compare(password, user.password);
            if (comparison) {
                return true;
            }
            return false;
        } catch (error: unknown) {
            return false;
        }
    }

    async login(userDto: UserDto): Promise<AuthResponse> {
        try {
            const { email: email, password: password } = userDto;
            const user: UserDto = await this.userModel.findOne({ email: email }).exec();
            if (!user) {
                return {
                    Success: false,
                    Message: 'auth.errors.email_not_registered',
                } as AuthResponse;
            }
            const comparison: boolean = await compare(password, user.password);
            if (!comparison) {
                return {
                    Success: false,
                    Message: 'auth.errors.password_wrong_email',
                } as AuthResponse;
            }
            const payload: JwtPayload = {
                email: user.email,
                _id: user._id,
            };
            const accessToken: string = await Promise.resolve(this.jwtService.sign(payload));
            return {
                Token: accessToken,
                ExpiresIn: 10800,
                _id: user._id,
                Message: 'auth.login_success',
            } as AuthResponse;
        } catch (error: unknown) {
            throw new InternalServerErrorException('auth.errors.login_error');
        }
    }

    async getAllEmails(email: string): Promise<boolean> {
        try {
            const result: {
                _id: string;
                password: string;
            } = await this.userModel.findOne({ email: email }, 'password').exec();
            if (!result) {
                return true;
            }
            return false;
        } catch (error: unknown) {
            return false;
        }
    }

    async signup(preferencesDto: PreferencesDto, signupDto: SignupDto): Promise<AuthResponse> {
        try {
            const { languageCode: language, weightUnit: weightUnit } = preferencesDto;
            const {
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            } = signupDto;
            const encryptedPassword: string = await hash(password, 10);
            const user = new this.userModel({
                email: email,
                password: encryptedPassword,
            });
            const savedUser: UserDto = await user.save();
            const preferences: PreferencesDto = {
                userId: savedUser._id,
                languageCode: language,
                weightUnit: weightUnit,
                showByPeriod: 'week',
            };
            await this.preferencesModel.create(preferences);
            return {
                Success: true,
                Message: 'auth.signup_success',
            } as AuthResponse;
        } catch (error: unknown) {
            throw new InternalServerErrorException('auth.errors.signup_error');
        }
    }
}
