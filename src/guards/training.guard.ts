import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class TrainingGuard implements CanActivate {

    constructor(
        private readonly message: string,
    ){}

    canActivate(context: ExecutionContext): Promise<boolean> | Observable<boolean> | boolean {
        const request: Request = context.switchToHttp().getRequest();
        const trainingId: string | null = request.params.id;
        if (!trainingId) {
            throw new BadRequestException(this.message);
        }

        return true;
    }
}