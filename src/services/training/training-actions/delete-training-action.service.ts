import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewTraining } from 'src/models/training/new-training/new-training.model';
import { PastTrainingsResponse } from 'src/models/training/past-trainings/past-trainings-response.model';
import { Error } from '../../../models/errors/error';
import { PastTrainingsService } from '../past-trainings.service';

@Injectable()
export class DeleteTrainingActionService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<NewTraining>,
        private readonly pastTrainingService: PastTrainingsService,
    ){}

    async deleteTraining(
        trainingId: string,
        loggedUserId: string,
        currentDate: Date,
    ): Promise<PastTrainingsResponse> {
        try {
            const trainingToBeRemoved: NewTraining = await Promise.resolve(this.trainingModel.findById(trainingId as string));
            if(loggedUserId.toString() !== trainingToBeRemoved.userId.toString()){
                throw new HttpException({
                    status: HttpStatus.UNAUTHORIZED,
                    message: 'common.errors.not_authorized',
                }, HttpStatus.UNAUTHORIZED);
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
                    throw new HttpException({
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: 'training.past_trainings.actions.errors.error_delete_training',
                    }, HttpStatus.INTERNAL_SERVER_ERROR);
                case 401:
                    throw new HttpException({
                        status: HttpStatus.UNAUTHORIZED,
                        message: 'common.errors.not_authorized',
                    }, HttpStatus.UNAUTHORIZED);
                default:
                    throw new HttpException({
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: 'training.past_trainings.actions.errors.error_delete_training',
                    }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}