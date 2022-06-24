import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserDto } from '../models/auth/login.model';

export const GET_USER = createParamDecorator((_data: unknown, ctx: ExecutionContext): UserDto => {
    const req: Request = ctx.switchToHttp().getRequest();
    return req.user as UserDto;
});