import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneralResponseDto } from '../../models/common/response.model';
import { StreamModelDto } from '../../models/common/stream.model';
import { TrainingSplitDto } from '../../models/training/training-split/training-split.model';

@Injectable()
export class TrainingSplitsService {
    constructor(
        @InjectModel('TrainingSplit') private _trainingSplitModel: Model<TrainingSplitDto>,
    ) {}

    async getTrainingSplits(loggedUserId: string): Promise<StreamModelDto<TrainingSplitDto[]>> {
        try {
            const trainingSplits = await this._trainingSplitModel
                .find({ userId: loggedUserId })
                .exec();
            if (!trainingSplits.length) {
                throw new InternalServerErrorException(
                    'training.training_split.errors.training_splits_not_available',
                );
            }
            return {
                IsLoading: true,
                IsError: false,
                Value: trainingSplits,
            } as StreamModelDto<TrainingSplitDto[]>;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.training_split.errors.training_splits_not_available',
            );
        }
    }

    async createTrainingSplit(
        trainingSplit: TrainingSplitDto,
        userId: string,
    ): Promise<GeneralResponseDto> {
        try {
            const updatedTrainingSplit = {
                ...trainingSplit,
                userId,
            };
            await this._trainingSplitModel.create(updatedTrainingSplit);
            return {
                Message: 'training.training_split.training_split_created',
            } as GeneralResponseDto;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.training_splits.errors.error_create_training_split',
            );
        }
    }
}
