import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewTrainingDto } from 'src/models/training/new-training/new-training.model';
import { PastTrainingsResponse } from 'src/models/training/past-trainings/past-trainings.model';
import { Error } from '../../../models/errors/error';
import { PastTrainingsService } from '../past-trainings.service';

@Injectable()
export class DeleteTrainingActionService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<NewTrainingDto>,
        private readonly pastTrainingService: PastTrainingsService,
    ) {}

    async deleteTraining(
        trainingId: string,
        loggedUserId: string,
        currentDate: Date,
    ): Promise<PastTrainingsResponse> {
        try {
            const trainingToBeRemoved: NewTrainingDto = await Promise.resolve(this.trainingModel.findById(trainingId as string));
            if(loggedUserId.toString() !== trainingToBeRemoved.userId.toString()){
                throw new UnauthorizedException('common.errors.not_authorized');
            }
            await Promise.resolve(this.trainingModel.findByIdAndRemove(trainingId));
            const pastTrainings: PastTrainingsResponse = await this.pastTrainingService.getPastTrainings(
                currentDate as Date,
                loggedUserId as string,
            );
            return {
                ...pastTrainings,
                message: 'training.past_trainings.actions.delete_success',
            } as PastTrainingsResponse;
        }
        catch(error: unknown) {
            switch((error as Error).status) {
                case 500:
                    throw new InternalServerErrorException('training.past_trainings.actions.errors.error_delete_training');
                case 401:
                    throw new UnauthorizedException('common.errors.not_authorized');
                default:
                    throw new InternalServerErrorException('training.past_trainings.actions.errors.error_delete_training');
            }
        }
    }
}