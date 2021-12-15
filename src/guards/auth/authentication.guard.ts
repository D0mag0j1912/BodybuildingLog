import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();
        const userId: string | string[] = request.headers.userId;
        if (!userId) {
            throw new UnauthorizedException('common.errors.not_authenticated');
        }
        return true;
    }
}