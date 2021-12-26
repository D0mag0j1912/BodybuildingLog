import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_TOKEN } from '../constants/jwt-web-token';
import { JwtPayload } from '../models/auth/jwt-payload.model';
import { UserDto } from '../models/auth/login.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDto>,
    ) {
        super({
            secretOrKey: JWT_TOKEN,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(payload: JwtPayload): Promise<UserDto> {
        // tslint:disable-next-line: await-promise
        const user: UserDto = await this.userModel.findOne({ email: payload.email });
        if (!user) {
            throw new UnauthorizedException('common.errors.not_authenticated');
        }
        return user;
    }
}