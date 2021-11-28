import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Model } from 'mongoose';
import { AuthResponse } from 'src/models/auth/auth-response.model';
import { Login } from 'src/models/auth/login.model';
import { Preferences } from 'src/models/preferences/preferences.model';
import { JWT_TOKEN } from '../../consts/jwt-web-token';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<Login>,
        @InjectModel('Preferences') private readonly preferencesModel: Model<Preferences>,
    ){}

    async passwordFitsEmail(
        email: string,
        password: string,
    ): Promise<boolean> {
        try {
            // tslint:disable-next-line: await-promise
            const user: Login = await this.userModel.findOne({ email: email });
            if(!user){
                return false;
            }
            const comparison: boolean = await compare(
                password,
                user.password,
            );
            if(comparison){
                return true;
            }
            return false;
        }
        catch(error: unknown) {
            return false;
        }
    }

    async login(
        email: string,
        password: string,
    ): Promise<AuthResponse> {
        try {
            // tslint:disable-next-line: await-promise
            const user: Login = await this.userModel.findOne({ email: email });
            if(!user){
                return {
                    success: false,
                    message: 'auth.errors.email_not_registered',
                } as AuthResponse;
            }
            const comparison: boolean = await compare(
                password,
                user.password,
            );
            if(!comparison){
                return {
                    success: false,
                    message: 'auth.errors.password_wrong_email',
                } as AuthResponse;
            }
            const token: string = sign({
                email: user.email,
                _id: user._id,
            }, JWT_TOKEN, {
                expiresIn: '3h',
            });
            // tslint:disable-next-line: await-promise
            const preferences: Preferences = await this.preferencesModel.findOne({ userId: user._id });
            return {
                token: token,
                expiresIn: 10800,
                _id: user._id,
                message: 'auth.login_success',
                preferences: preferences,
            } as AuthResponse;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'auth.errors.login_error',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAllEmails(email: string)
        : Promise<boolean> {
        try {
            const result: {
                _id: string,
                password: string
            // tslint:disable-next-line: await-promise
            } = await this.userModel.findOne(
                { email: email },
                'password',
            );
            if(!result){
                return true;
            }
            return false;
        }
        catch(error: unknown) {
            return false;
        }
    }

    async signup(
        language: string,
        weightFormat: string,
        email: string,
        password: string,
    ): Promise<AuthResponse> {
        try {
            const encryptedPassword: string = await hash(password, 10);
            const user = new this.userModel({
                email: email,
                password: encryptedPassword,
            });
            const savedUser: Login = await user.save();
            const preferences: Preferences = {
                userId: savedUser._id,
                language: language,
                weightFormat: weightFormat,
            } as Preferences;
            await this.preferencesModel.create(preferences);
            return {
                success: true,
                message: 'auth.signup_success',
            } as AuthResponse;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'auth.errors.signup_error',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}