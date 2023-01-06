import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewTrainingDto } from '../../../models/training/new-training/new-training.model';
import { PastTrainingsDto } from '../../../models/training/past-trainings/past-trainings.model';
import { Paginator } from '../../../models/common/paginator.model';
import { StreamData } from '../../../models/common/response.model';
import { Error } from '../../../models/errors/error';
import { DeleteTrainingMetaDto } from '../../../models/training/training-actions/delete-training-action.model';
import { PreferencesService } from '../../preferences/preferences.service';
import { PastTrainingsService } from '../past-trainings.service';

@Injectable()
export class DeleteTrainingActionService {
    constructor(
        @InjectModel('Training') private _trainingModel: Model<NewTrainingDto>,
        private _pastTrainingService: PastTrainingsService,
        private _preferencesService: PreferencesService,
    ) {}

    async deleteTraining(
        trainingId: string,
        loggedUserId: string,
        meta: DeleteTrainingMetaDto,
    ): Promise<StreamData<PastTrainingsDto>> {
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
            const userPreferences = await this._preferencesService.getPreferences(loggedUserId);
            let pastTrainings: StreamData<Paginator<PastTrainingsDto>>;
            //TODO: Refactor frontend so this part is not needed. Delete should be returning void, not past trainings (Optimistic deletion on frontend. Remove first from store, then on refresh, fetch from API).
            if (meta?.currentDate) {
                pastTrainings = await this._pastTrainingService.getPastTrainings(
                    meta.currentDate,
                    userPreferences.showByPeriod,
                    loggedUserId,
                    true,
                );
            } else {
                pastTrainings = await this._pastTrainingService.searchTrainings(
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
            } as StreamData<PastTrainingsDto>;
        } catch (error: unknown) {
            switch ((error as Error).status) {
                case 500:
                    throw new InternalServerErrorException(
                        'training.past_trainings.actions.errors.error_delete_training',
                    );
                case 401:
                    throw new UnauthorizedException('common.errors.not_authorized');
                default:
                    throw new InternalServerErrorException(
                        'training.past_trainings.actions.errors.error_delete_training',
                    );
            }
        }
    }
}
