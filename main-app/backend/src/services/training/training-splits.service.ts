import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

    async getTrainingSplit(trainingSplitId: string): Promise<StreamModelDto<TrainingSplitDto>> {
        try {
            const trainingSplit = await this._trainingSplitModel.findById(trainingSplitId).exec();
            return {
                IsLoading: true,
                IsError: false,
                Value: trainingSplit,
            } as StreamModelDto<TrainingSplitDto>;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.training_split.errors.training_split_not_available',
            );
        }
    }

    async createTrainingSplit(
        trainingSplit: TrainingSplitDto,
        userId: string,
    ): Promise<TrainingSplitDto> {
        try {
            const updatedTrainingSplit = {
                ...trainingSplit,
                userId,
            };
            const newTrainingSplit = await this._trainingSplitModel.create(updatedTrainingSplit);
            return newTrainingSplit;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.training_splits.errors.error_create_training_split',
            );
        }
    }
}
