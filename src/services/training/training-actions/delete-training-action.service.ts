import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Training } from 'src/models/training/new-training/training.model';
import { PastTrainings } from 'src/models/training/past-trainings/past-trainings.model';
import { Paginator } from '../../../models/common/paginator.model';
import { StreamData } from '../../../models/common/response.model';
import { Error } from '../../../models/errors/error';
import { PastTrainingsService } from '../past-trainings.service';

@Injectable()
export class DeleteTrainingActionService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<Training>,
        private readonly pastTrainingService: PastTrainingsService,
    ) { }

    async deleteTraining(
        trainingId: string,
        loggedUserId: string,
        currentDate: Date,
    ): Promise<StreamData<PastTrainings>> {
        try {
            const trainingToBeRemoved: Training = await this.trainingModel.findById(trainingId as string).exec();
            if(loggedUserId.toString() !== trainingToBeRemoved.userId.toString()){
                throw new UnauthorizedException('common.errors.not_authorized');
            }
            await this.trainingModel.findByIdAndRemove(trainingId, { useFindAndModify: false }).exec();
            const pastTrainings: StreamData<Paginator<PastTrainings>> = await this.pastTrainingService.getPastTrainings(
                currentDate,
                'week',
                loggedUserId,
                true,
            );
            return {
                IsLoading: true,
                Value: pastTrainings.Value,
                IsError: false,
            } as StreamData<PastTrainings>;
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