import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { endOfDay, startOfDay } from 'date-fns';
import { getIntervalDate, isNextWeek, isPreviousWeek } from '../../helpers/date.helper';
import { paginate } from '../../helpers/pagination.helper';
import { Paginator, PaginatorParams } from '../../models/common/paginator.model';
import { StreamData } from '../../models/common/response.model';
import { Training } from '../../models/training/new-training/training.model';
import { PastTrainings, PeriodFilterType } from '../../models/training/past-trainings/past-trainings.model';
import { DateInterval } from '../../models/common/dates.model';

@Injectable()
export class PastTrainingsService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<Training>,
    ) { }
    
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
                results.Results.Dates = getIntervalDate(results?.Results.Trainings);
                return {
                    IsLoading: true,
                    Value: results,
                    IsError: false,
                } as StreamData<Paginator<PastTrainings>>;
            }
            return this.getPastTrainings(
                new Date(),
                'week',
                loggedInUserId,
            );
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.filters.errors.search_error');
        }
    }

    async getPastTraining(trainingId: string): Promise<StreamData<Training>> {
        try {
            const training = await this.trainingModel.findById(trainingId).exec();
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
        filterType: PeriodFilterType,
        loggedUserId: string,
        isDeleteTraining?: boolean,
    ): Promise<StreamData<Paginator<PastTrainings>>> {
        try {
            const dates: DateInterval = getIntervalDate(new Date(currentDate));
            const condition: FilterQuery<Training> = {
                userId: loggedUserId,
                trainingDate: {
                    $gte: filterType === 'week' ? dates.StartDate : startOfDay(new Date(currentDate)),
                    $lt: filterType === 'week' ? dates.EndDate : endOfDay(new Date(currentDate)),
                },
            };
            const results: Paginator<PastTrainings> = await paginate(this.trainingModel, condition);
            results.Results.Dates = filterType === 'week' ? dates : { StartDate: new Date(currentDate), EndDate: new Date(currentDate) };
            results.Results.EarliestTrainingDate = (await this.getEarliestDate(loggedUserId))?.trainingDate.toString() ?? new Date().toString();
            results.Results.IsPreviousWeek = isPreviousWeek(new Date(results.Results?.EarliestTrainingDate), dates);
            results.Results.IsNextWeek = isNextWeek(dates);
            if (isDeleteTraining) {
                results.Results.Message = 'training.past_trainings.actions.delete_success';
            }
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

    async getEarliestDate(loggedUserId: string): Promise<Partial<Training>> {
        const minDate = await this.trainingModel
            .findOne({
                userId: loggedUserId,
            }, 'trainingDate -_id')
            .sort({ trainingDate: 1 })
            .limit(1)
            .exec();
        return minDate;
    }

}