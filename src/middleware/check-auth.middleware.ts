import { NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export class CheckAuthMiddleware implements NestMiddleware {
    use(
        request: Request, 
        response: Response,
        next: NextFunction
    ){
        try {
            const token: string = request.headers.authorization.split(' ')[1];
            verify(token, 'secret_this_should_be_longer');
            next();
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                message: 'No token available!'
            }, HttpStatus.UNAUTHORIZED);
        }
    }
}