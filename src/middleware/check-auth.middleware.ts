import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface VerifiedToken {
    readonly email: string;
    readonly _id: string;
    readonly iat: number;
    readonly exp: number;
}

export class CheckAuthMiddleware implements NestMiddleware {
    use(
        request: Request,
        response: Response,
        next: NextFunction,
    ): void {
        try {
            const token: string = request.headers.authorization.split(' ')[1];
            const userData: VerifiedToken = verify(token, 'secret_this_should_be_longer');
            request.headers.userId = userData._id;
            next();
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                message: 'common.errors.not_authenticated',
            }, HttpStatus.UNAUTHORIZED);
        }
    }
}