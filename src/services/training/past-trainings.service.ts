import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { DateInterval, getIntervalDate } from '../../helpers/date.helper';
import { paginate } from '../../helpers/pagination.helper';
import { Paginator, PaginatorParams } from '../../models/common/paginator.model';
import { TrainingData } from '../../models/common/response.model';
import { Training } from '../../models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings.model';

@Injectable()
export class PastTrainingsService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<Training>,
    ) {}
    
    async searchTrainings(
        loggedInUserId: string,
        searchValue: string,
        size: number,
        page: number,
    ): Promise<TrainingData<PastTrainingsResponse>> {
        try {
            if (searchValue !== '' && searchValue && size && page) {
                const query: PaginatorParams = {
                    Page: page,
                    Size: size,
                };
                const condition: FilterQuery<Training> = {
                    'exercise.exerciseName': {
                        $regex: searchValue,
                        $options: 'i',
                    },
                    userId: loggedInUserId,
                };
                const results: Paginator<Training> = await paginate(query, this.trainingModel, condition);
                const minMaxDate: DateInterval = getIntervalDate(results?.Results);
                return {
                    IsLoading: true,
                    Value: {
                        Trainings: results?.Results ?? [],
                        Dates: minMaxDate,
                        TotalTrainings: results.TotalCount || 0,
                    } as PastTrainingsResponse,
                    IsError: false,
                } as TrainingData<PastTrainingsResponse>;
            }
            return this.getPastTrainings(
                new Date(),
                loggedInUserId,
            );
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.filters.errors.search_error');
        }
    }

    async getPastTraining(trainingId: string): Promise<TrainingData<Training>> {
        try {
            const training =  await this.trainingModel.findById(trainingId).exec();
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
            const trainings: Training[] = await this.trainingModel
                .find({
                    userId: loggedUserId,
                    createdAt: {
                        $gte: dates.StartDate,
                        $lt: dates.EndDate,
                    },
                })
                .sort({ createdAt: 'asc' })
                .exec();
            const totalTrainings = await this.trainingModel
                .countDocuments({
                    userId: loggedUserId,
                    createdAt: {
                        $gte: dates.StartDate,
                        $lt: dates.EndDate,
                    },
                })
                .exec();
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