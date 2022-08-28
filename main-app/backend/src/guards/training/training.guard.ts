import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class TrainingGuard implements CanActivate {
    constructor(private readonly message: string) {}

    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();
        const trainingId: string | null = request.params.id;
        if (!trainingId) {
            throw new BadRequestException(this.message);
        }
        return true;
    }
}
