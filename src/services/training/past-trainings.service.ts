import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { getIntervalDate } from 'src/helpers/date.helper';
import { DateInterval } from 'src/helpers/date.helper';
import { NewTrainingDto } from 'src/models/training/new-training/new-training.model';
import { PastTrainingsResponse } from 'src/models/training/past-trainings/past-trainings.model';

@Injectable()
export class PastTrainingsService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<NewTrainingDto>,
    ) {}

    async searchTrainings(
        searchValue: string,
        loggedInUserId: string,
    ): Promise<NewTrainingDto[]> {
        try {
            return this.trainingModel.find({
                'exercise.exerciseName': {
                    $regex: searchValue,
                    $options: 'i',
                },
                'userId': loggedInUserId,
            }).limit(5);
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.filters.errors.search_error');
        }
    }

    async getPastTraining(trainingId: string): Promise<NewTrainingDto> {
        try {
            // tslint:disable-next-line: await-promise
            return this.trainingModel.findById(trainingId);
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.errors.error_load_training');
        }
    }

    async getPastTrainings(
        currentDate: Date,
        loggedUserId: string,
    ): Promise<PastTrainingsResponse> {
        try {
            const dates: DateInterval = {
                startDate: getIntervalDate(new Date(currentDate)).startDate,
                endDate: getIntervalDate(new Date(currentDate)).endDate,
            };
            // tslint:disable-next-line: await-promise
            const trainings: NewTrainingDto[] = await this.trainingModel.find({
                userId: loggedUserId,
                createdAt: {
                    $gte: dates.startDate,
                    $lt: dates.endDate,
                },
            }).sort({ createdAt: 'asc' });
            // tslint:disable-next-line: await-promise
            const trainingsPerPage: number = await this.trainingModel.countDocuments({
                userId: loggedUserId,
                createdAt: {
                    $gte: dates.startDate,
                    $lt: dates.endDate,
                },
            });
            return {
                trainings: trainings,
                dates: dates,
                trainingsPerPage: trainingsPerPage,
            } as PastTrainingsResponse;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.errors.past_trainings_error_title');
        }
    }
}