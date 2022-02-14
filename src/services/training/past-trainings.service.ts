import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { getIntervalDate, isNextWeek, isPreviousWeek } from '../../helpers/date.helper';
import { paginate } from '../../helpers/pagination.helper';
import { Paginator, PaginatorParams } from '../../models/common/paginator.model';
import { StreamData } from '../../models/common/response.model';
import { Training } from '../../models/training/new-training/new-training.model';
import { PastTrainings } from '../../models/training/past-trainings/past-trainings.model';
import { DateInterval } from '../../models/common/dates.model';

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
    ): Promise<StreamData<Paginator<PastTrainings>>> {
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
                const results: Paginator<PastTrainings> = await paginate(this.trainingModel, condition, query);
                return {
                    IsLoading: true,
                    Value: results,
                    IsError: false,
                } as StreamData<Paginator<PastTrainings>>;
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

    async getPastTraining(trainingId: string): Promise<StreamData<Training>> {
        try {
            const training =  await this.trainingModel.findById(trainingId).exec();
            return {
                IsLoading: true,
                IsError: false,
                Value: training,
            } as StreamData<Training>;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.errors.error_load_training');
        }
    }

    async getPastTrainings(
        currentDate: Date,
        loggedUserId: string,
    ): Promise<StreamData<Paginator<PastTrainings>>> {
        try {
            const dates: DateInterval = getIntervalDate(new Date(currentDate));
            const firstLoggedTrainingDate = await this.getMinimumDate(loggedUserId);
            const condition: FilterQuery<Training> = {
                userId: loggedUserId,
                createdAt: {
                    $gte: dates.StartDate,
                    $lt: dates.EndDate,
                },
            };
            const results: Paginator<PastTrainings> = await paginate(this.trainingModel, condition);
            results.Results.Dates = dates;
            results.Results.IsPreviousWeek = isPreviousWeek(firstLoggedTrainingDate.createdAt, dates);
            results.Results.IsNextWeek = isNextWeek(dates);
            results.Results.FirstWeek = getIntervalDate(firstLoggedTrainingDate.createdAt);
            return {
                IsLoading: true,
                Value: results,
                IsError: false,
            } as StreamData<Paginator<PastTrainings>>;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.errors.past_trainings_error_title');
        }
    }

    async getMinimumDate(loggedUserId: string): Promise<Partial<Training>> {
        const minDate = await this.trainingModel
            .findOne({
                userId: loggedUserId,
            }, 'createdAt -_id')
            .sort({ createdAt: 1 })
            .limit(1)
            .exec();
        return minDate;
    }
}