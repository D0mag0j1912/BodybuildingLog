import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneralResponseData } from '../../models/common/response.model';
import { Error } from '../../models/errors/error';
import { Exercise } from '../../models/training/exercise.model';
import { NewTrainingDto } from '../../models/training/new-training/new-training.model';

@Injectable()
export class NewTrainingService {

    constructor(
        @InjectModel('Exercise') private readonly exerciseModel: Model<Exercise>,
        @InjectModel('Training') private readonly trainingModel: Model<NewTrainingDto>,
    ) {}

    async editTraining(
        trainingId: string,
        updatedTrainingData: NewTrainingDto,
        loggedUserId: string,
    ): Promise<GeneralResponseData> {
        try {
            // tslint:disable-next-line: await-promise
            const trainingToBeUpdated: NewTrainingDto = await this.trainingModel.findById(trainingId);
            if (trainingToBeUpdated.userId.toString() !== loggedUserId.toString()) {
                throw new UnauthorizedException('common.errors.not_authorized');
            }
            // tslint:disable-next-line: await-promise
            await this.trainingModel.updateOne({ _id: trainingId }, { $set: updatedTrainingData });
            return {
                message: 'training.new_training.training_updated',
            } as GeneralResponseData;
        }
        catch (error: unknown) {
            switch ((error as Error).status) {
                case 500:
                    throw new HttpException({
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: 'training.new_training.errors.error_update_training',
                    }, HttpStatus.INTERNAL_SERVER_ERROR);
                case 401:
                    throw new UnauthorizedException('common.errors.not_authorized');
                default:
                    throw new HttpException({
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: 'training.new_training.errors.error_update_training',
                    }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    async addTraining(trainingData: NewTrainingDto): Promise<GeneralResponseData> {
        try {
            await this.trainingModel.create(trainingData);
            return { message: 'training.new_training.training_saved' } as GeneralResponseData;
        }
        catch (error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'training.new_training.errors.error_save_training',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getExercises(): Promise<Exercise[]> {
        try {
            // tslint:disable-next-line: await-promise
            const exercises: Exercise[] = await this.exerciseModel.find();
            if (exercises.length === 0) {
                throw new HttpException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'training.new_training.errors.exercises_not_available',
                }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return exercises;
        }
        catch (error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'training.new_training.errors.exercises_not_available',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}