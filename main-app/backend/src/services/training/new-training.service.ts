import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneralResponseDto, StreamData } from '../../models/common/response.model';
import { Error } from '../../models/errors/error';
import { ExerciseDto } from '../../models/training/exercise.model';
import { NewTrainingDto } from '../../models/training/new-training/new-training.model';

@Injectable()
export class NewTrainingService {
    constructor(
        @InjectModel('Exercise') private _exerciseModel: Model<ExerciseDto>,
        @InjectModel('Training') private _trainingModel: Model<NewTrainingDto>,
    ) {}

    async editTraining(
        trainingId: string,
        updatedTrainingData: NewTrainingDto,
        loggedUserId: string,
    ): Promise<GeneralResponseDto> {
        try {
            const trainingToBeUpdated: NewTrainingDto = await this._trainingModel
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

    async addTraining(trainingData: NewTrainingDto): Promise<GeneralResponseDto> {
        try {
            await this._trainingModel.create(trainingData);
            return { Message: 'training.new_training.training_saved' } as GeneralResponseDto;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.new_training.errors.error_save_training',
            );
        }
    }

    async getExercises(): Promise<StreamData<ExerciseDto[]>> {
        try {
            const exercises: ExerciseDto[] = await this._exerciseModel.find().exec();
            if (exercises.length === 0) {
                throw new InternalServerErrorException(
                    'training.new_training.errors.exercises_not_available',
                );
            }
            return {
                IsLoading: true,
                IsError: false,
                Value: exercises,
            } as StreamData<ExerciseDto[]>;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.new_training.errors.exercises_not_available',
            );
        }
    }
}
