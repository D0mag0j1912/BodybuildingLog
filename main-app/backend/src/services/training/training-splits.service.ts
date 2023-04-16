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

    async getTrainingSplits(
        loggedUserId: string,
        contains = '',
    ): Promise<StreamModelDto<TrainingSplitDto[]>> {
        try {
            let trainingSplits;
            if (!contains) {
                trainingSplits = await this._trainingSplitModel
                    .find({ userId: loggedUserId })
                    .exec();
            } else {
                const queryWordRegex = new RegExp(contains, 'i');
                trainingSplits = await this._trainingSplitModel.find({
                    name: { $regex: queryWordRegex },
                    userId: loggedUserId,
                });
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

    async deleteTrainingSplit(trainingSplitId: string, userId: string): Promise<void> {
        try {
            const trainingSplitToBeRemoved = await this._trainingSplitModel
                .findById(trainingSplitId)
                .exec();
            if (userId.toString() !== trainingSplitToBeRemoved.userId.toString()) {
                throw new UnauthorizedException('common.errors.not_authorized');
            }
            await this._trainingSplitModel
                .findByIdAndRemove(trainingSplitId, { useFindAndModify: false })
                .exec();
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.new_training.errors.error_delete_training_split',
            );
        }
    }
}
