import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneralResponseDto, StreamData } from '../../models/common/response.model';
import { Error } from '../../models/errors/error';
import { Exercise } from '../../models/training/exercise.model';
import { NewTraining } from '../../models/training/new-training/new-training.model';

@Injectable()
export class NewTrainingService {
    constructor(
        @InjectModel('Exercise') private _exerciseModel: Model<Exercise>,
        @InjectModel('Training') private _trainingModel: Model<NewTraining>,
    ) {}

    async editTraining(
        trainingId: string,
        updatedTrainingData: NewTraining,
        loggedUserId: string,
    ): Promise<GeneralResponseDto> {
        try {
            const trainingToBeUpdated: NewTraining = await this._trainingModel
                .findById(trainingId)
                .exec();
            if (trainingToBeUpdated.userId.toString() !== loggedUserId.toString()) {
                throw new UnauthorizedException('common.errors.not_authorized');
            }
            await this._trainingModel
                .updateOne({ _id: trainingId }, { $set: updatedTrainingData })
                .exec();
            return { Message: 'training.new_training.training_updated' } as GeneralResponseDto;
        } catch (error: unknown) {
            switch ((error as Error).status) {
                case 500:
                    throw new InternalServerErrorException(
                        'training.new_training.errors.error_update_training',
                    );
                case 401:
                    throw new UnauthorizedException('common.errors.not_authorized');
                default:
                    throw new InternalServerErrorException(
                        'training.new_training.errors.error_update_training',
                    );
            }
        }
    }

    async addTraining(trainingData: NewTraining): Promise<GeneralResponseDto> {
        try {
            await this._trainingModel.create(trainingData);
            return { Message: 'training.new_training.training_saved' } as GeneralResponseDto;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.new_training.errors.error_save_training',
            );
        }
    }

    async getExercises(): Promise<StreamData<Exercise[]>> {
        try {
            const exercises: Exercise[] = await this._exerciseModel.find().exec();
            if (exercises.length === 0) {
                throw new InternalServerErrorException(
                    'training.new_training.errors.exercises_not_available',
                );
            }
            return {
                IsLoading: true,
                IsError: false,
                Value: exercises,
            } as StreamData<Exercise[]>;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.new_training.errors.exercises_not_available',
            );
        }
    }
    //TODO: check later
    async getExerciseByName(exerciseName: string): Promise<Exercise> {
        try {
            return await this._exerciseModel.findOne({ name: exerciseName }).exec();
        } catch (error: unknown) {
            throw new InternalServerErrorException();
        }
    }
}
