import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Training } from '../../../models/training/new-training/training.model';
import { PastTrainings } from '../../../models/training/past-trainings/past-trainings.model';
import { Paginator } from '../../../models/common/paginator.model';
import { StreamData } from '../../../models/common/response.model';
import { Error } from '../../../models/errors/error';
import { DeleteTrainingMetaDto } from '../../../models/training/training-actions/delete-training-action.model';
import { PreferencesService } from '../../preferences/preferences.service';
import { PastTrainingsService } from '../past-trainings.service';

@Injectable()
export class DeleteTrainingActionService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<Training>,
        private readonly pastTrainingService: PastTrainingsService,
        private readonly preferencesService: PreferencesService,
    ) { }

    async deleteTraining(
        trainingId: string,
        loggedUserId: string,
        meta: DeleteTrainingMetaDto,
    ): Promise<StreamData<PastTrainings>> {
        try {
            const trainingToBeRemoved: Training = await this.trainingModel.findById(trainingId as string).exec();
            if (loggedUserId.toString() !== trainingToBeRemoved.userId.toString()) {
                throw new UnauthorizedException('common.errors.not_authorized');
            }
            await this.trainingModel.findByIdAndRemove(trainingId, { useFindAndModify: false }).exec();
            const userPreferences = await this.preferencesService.getPreferences(loggedUserId);
            let pastTrainings: StreamData<Paginator<PastTrainings>>;
            if (meta?.currentDate) {
                pastTrainings = await this.pastTrainingService.getPastTrainings(
                    meta.currentDate,
                    userPreferences.ShowByPeriod,
                    loggedUserId,
                    true,
                );
            }
            else {
                pastTrainings = await this.pastTrainingService.searchTrainings(
                    loggedUserId,
                    meta.searchData.searchValue,
                    meta.searchData.size,
                    meta.searchData.page,
                );
            }
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