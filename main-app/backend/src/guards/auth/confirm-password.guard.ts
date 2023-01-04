import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ConfirmPasswordGuard implements CanActivate {
    constructor(private _responseMessage: string) {}

    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();
        const password = request.body.password;
        const confirmPassword = request.body.confirmPassword;

        if (password !== confirmPassword) {
            throw new BadRequestException(this._responseMessage);
        }
        return true;
    }
}
