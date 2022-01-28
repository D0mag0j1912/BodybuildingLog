import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DateInterval, getIntervalDate } from '../../helpers/date.helper';
import { TrainingData } from '../../models/common/response.model';
import { Training } from '../../models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings.model';

@Injectable()
export class PastTrainingsService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<Training>,
    ) {}
    
    async searchTrainings(
        searchValue: string,
        loggedInUserId: string,
    ): Promise<TrainingData<PastTrainingsResponse>> {
        try {
            if (searchValue !== '' && searchValue) {
                // tslint:disable-next-line: await-promise
                const trainings: Training[] = await this.trainingModel
                    .find({
                        'exercise.exerciseName': {
                            $regex: searchValue,
                            $options: 'i',
                        },
                        userId: loggedInUserId,
                    })
                    .sort({ createdAt: 'asc' })
                    .limit(5);
                // tslint:disable-next-line: await-promise
                const totalTrainings: number = await this.trainingModel
                    .countDocuments({
                        'exercise.exerciseName': {
                            $regex: searchValue,
                            $options: 'i',
                        },
                        userId: loggedInUserId,
                    });
                const minMaxDate: DateInterval = getIntervalDate(trainings);
                return {
                    IsLoading: true,
                    Value: {
                        Trainings: trainings,
                        Dates: minMaxDate,
                        TotalTrainings: totalTrainings,
                    } as PastTrainingsResponse,
                    IsError: false,
                } as TrainingData<PastTrainingsResponse>;
            }
            else {
                return this.getPastTrainings(
                    new Date(),
                    loggedInUserId,
                );
            }
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.filters.errors.search_error');
        }
    }

    async getPastTraining(trainingId: string): Promise<TrainingData<Training>> {
        try {
            // tslint:disable-next-line: await-promise
            const training =  await this.trainingModel.findById(trainingId);
            return {
                IsLoading: true,
                IsError: false,
                Value: training,
            } as TrainingData<Training>;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.errors.error_load_training');
        }
    }

    async getPastTrainings(
        currentDate: Date,
        loggedUserId: string,
    ): Promise<TrainingData<PastTrainingsResponse>> {
        try {
            const dates: DateInterval = getIntervalDate(new Date(currentDate));
            // tslint:disable-next-line: await-promise
            const trainings: Training[] = await this.trainingModel.find({
                userId: loggedUserId,
                createdAt: {
                    $gte: dates.StartDate,
                    $lt: dates.EndDate,
                },
            }).sort({ createdAt: 'asc' });
            // tslint:disable-next-line: await-promise
            const totalTrainings = await this.trainingModel.countDocuments({
                userId: loggedUserId,
                createdAt: {
                    $gte: dates.StartDate,
                    $lt: dates.EndDate,
                },
            });
            return {
                IsLoading: true,
                Value: {
                    Trainings: trainings,
                    Dates: dates,
                    TotalTrainings: totalTrainings,
                } as PastTrainingsResponse,
                IsError: false,
            } as TrainingData<PastTrainingsResponse>;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.errors.past_trainings_error_title');
        }
    }
}