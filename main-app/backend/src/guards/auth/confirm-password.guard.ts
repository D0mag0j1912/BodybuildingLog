import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { SignupDto } from '../../models/auth/signup/signup.model';

@Injectable()
export class ConfirmPasswordGuard implements CanActivate {
    constructor(private readonly responseMessage: string) {}

    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();
        const signupDto: SignupDto = request.body.signupData;

        if (signupDto.password !== signupDto.confirmPassword) {
            throw new BadRequestException(this.responseMessage);
        }
        return true;
    }
}
