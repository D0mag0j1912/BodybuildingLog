import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
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

    async editTrainingSplit(
        trainingSplitId: string,
        updatedData: TrainingSplitDto,
        userId: string,
    ): Promise<TrainingSplitDto> {
        try {
            const trainingSplitToBeUpdated = await this._trainingSplitModel.findById(
                trainingSplitId,
            );
            if (trainingSplitToBeUpdated.userId.toString() !== userId.toString()) {
                throw new UnauthorizedException('common.errors.not_authorized');
            }
            trainingSplitToBeUpdated.userId = updatedData.userId;
            trainingSplitToBeUpdated.name = updatedData.name;
            trainingSplitToBeUpdated.trainings = updatedData.trainings;
            await trainingSplitToBeUpdated.save();
            return trainingSplitToBeUpdated;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.new_training.errors.error_edit_training_split',
            );
        }
    }
}
