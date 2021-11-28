import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    canActivate(context: ExecutionContext): Promise<boolean> | Observable<boolean> | boolean {
        const host: HttpArgumentsHost = context.switchToHttp();
        const request: Request = host.getRequest();
        const userId: string | string[] = request.headers.userId;
        if (!userId) {
            throw new UnauthorizedException('common.errors.not_authenticated');
        }
        return true;
    }
}