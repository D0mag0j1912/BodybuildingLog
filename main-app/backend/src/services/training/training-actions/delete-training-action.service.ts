import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewTrainingDto } from '../../../models/training/new-training/new-training.model';
import { Error } from '../../../models/errors/error';

@Injectable()
export class DeleteTrainingActionService {
    constructor(@InjectModel('Training') private _trainingModel: Model<NewTrainingDto>) {}

    async deleteTraining(trainingId: string, loggedUserId: string): Promise<void> {
        try {
            const trainingToBeRemoved: NewTrainingDto = await this._trainingModel
                .findById(trainingId as string)
                .exec();
            if (loggedUserId.toString() !== trainingToBeRemoved.userId.toString()) {
                throw new UnauthorizedException('common.errors.not_authorized');
            }
            await this._trainingModel
                .findByIdAndRemove(trainingId, { useFindAndModify: false })
                .exec();
        } catch (error: unknown) {
            switch ((error as Error).status) {
                case 500:
                    throw new InternalServerErrorException(
                        'training.past_trainings.errors.error_delete_training',
                    );
                case 401:
                    throw new UnauthorizedException('common.errors.not_authorized');
                default:
                    throw new InternalServerErrorException(
                        'training.past_trainings.errors.error_delete_training',
                    );
            }
        }
    }
}
