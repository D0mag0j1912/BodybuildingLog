import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { compare, hash } from 'bcrypt';
import { Model } from 'mongoose';
import { UserDto } from '../../models/auth/login/login.model';
import { PreferencesDto } from '../../models/preferences/preferences.model';
import { LoginResponseDto } from '../../models/auth/login/login-response.model';
import { JwtPayload } from '../../models/auth/jwt-payload.model';
import { SignupDto } from '../../models/auth/signup/signup.model';
import { SignupResponseDto } from '../../models/auth/signup/signup-response.model';
import { SignupRequestDto } from '../../models/auth/signup/signup-request.model';
import { LoginRequestDto } from '../../models/auth/login/login-request.model';

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

    async login(userDto: LoginRequestDto): Promise<LoginResponseDto> {
        try {
            const { email: email, password: password } = userDto;
            const user: UserDto = await this.userModel.findOne({ email: email }).exec();
            if (!user) {
                return {
                    Success: false,
                    Message: 'auth.errors.email_not_registered',
                } as LoginResponseDto;
            }
            const comparison: boolean = await compare(password, user.password);
            if (!comparison) {
                return {
                    Success: false,
                    Message: 'auth.errors.password_wrong_email',
                } as LoginResponseDto;
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
            } as LoginResponseDto;
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

    async signup(data: SignupRequestDto): Promise<SignupResponseDto> {
        const preferencesData = {
            languageCode: data.languageCode,
            weightUnit: data.weightUnit,
        } as PreferencesDto;
        const signupData = {
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        } as SignupDto;
        try {
            const { languageCode: language, weightUnit: weightUnit } = preferencesData;
            const {
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            } = signupData;
            const encryptedPassword: string = await hash(password, 10);
            const user = new this.userModel({
                email: email,
                password: encryptedPassword,
            });
            const savedUser: UserDto = await user.save();
            const preferences: Partial<PreferencesDto> = {
                userId: savedUser._id,
                languageCode: language,
                weightUnit: weightUnit,
                showByPeriod: 'week',
                setDurationUnit: 'seconds',
            };
            await this.preferencesModel.create(preferences);
            return {
                Success: true,
                Message: 'auth.signup_success',
            } as SignupResponseDto;
        } catch (error: unknown) {
            throw new InternalServerErrorException('auth.errors.signup_error');
        }
    }
}
