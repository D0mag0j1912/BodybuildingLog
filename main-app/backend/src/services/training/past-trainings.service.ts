import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { endOfDay, getDay, startOfDay } from 'date-fns';
import { setTrainingDate, isNextWeek, isPreviousWeek } from '../../helpers/date.helper';
import { paginate } from '../../helpers/pagination.helper';
import { Paginator, PaginatorParams } from '../../models/common/paginator.model';
import { StreamData } from '../../models/common/response.model';
import { NewTraining } from '../../models/training/new-training/new-training.model';
import { PastTrainings } from '../../models/training/past-trainings/past-trainings.model';
import { DateInterval } from '../../models/common/dates.model';
import { PreferencesService } from '../preferences/preferences.service';
import { PeriodFilterType } from '../../models/training/past-trainings/period-filter.type';

@Injectable()
export class PastTrainingsService {
    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<NewTraining>,
        private readonly preferencesService: PreferencesService,
    ) {}

    async searchTrainings(
        loggedUserId: string,
        searchValue: string,
        size: number,
        page: number,
    ): Promise<StreamData<Paginator<PastTrainings>>> {
        try {
            if (searchValue !== '') {
                const query: PaginatorParams = {
                    Page: page,
                    Size: size,
                };
                const queryWordRegex = new RegExp(searchValue, 'i');
                const condition: FilterQuery<NewTraining> = {
                    $and: [
                        {
                            $or: [
                                {
                                    'exercises.exerciseData.translations.en': {
                                        $regex: queryWordRegex,
                                    },
                                },
                                {
                                    'exercises.exerciseData.translations.hr': {
                                        $regex: queryWordRegex,
                                    },
                                },
                            ],
                            userId: loggedUserId,
                        },
                    ],
                };
                const results: Paginator<PastTrainings> = await paginate(
                    this.trainingModel,
                    condition,
                    query,
                );
                results.Results.Dates = setTrainingDate(results?.Results.Trainings, {
                    StartDate: new Date(await this.getEarliestDate(loggedUserId)),
                    EndDate: new Date(await this.getLatestDate(loggedUserId)),
                });
                results.Results.DayName = this.getWeekDayName(results.Results.Dates.StartDate);
                return {
                    IsLoading: true,
                    Value: results,
                    IsError: false,
                } as StreamData<Paginator<PastTrainings>>;
            } else {
                const userPreferences = await this.preferencesService.getPreferences(loggedUserId);
                return this.getPastTrainings(
                    new Date(),
                    userPreferences.showByPeriod,
                    loggedUserId,
                );
            }
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.past_trainings.filters.errors.search_error',
            );
        }
    }

    async getPastTraining(trainingId: string): Promise<StreamData<NewTraining>> {
        try {
            const training = await this.trainingModel.findById(trainingId).exec();
            return {
                IsLoading: true,
                IsError: false,
                Value: training,
            } as StreamData<NewTraining>;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.past_trainings.errors.error_load_training',
            );
        }
    }

    async getPastTrainings(
        currentDate: Date,
        periodFilterType: PeriodFilterType,
        loggedUserId: string,
        isDeleteTraining?: boolean,
    ): Promise<StreamData<Paginator<PastTrainings>>> {
        try {
            const dates: DateInterval = setTrainingDate(new Date(currentDate));
            const condition: FilterQuery<NewTraining> = {
                userId: loggedUserId,
                trainingDate: {
                    $gte:
                        periodFilterType === 'week'
                            ? dates.StartDate
                            : startOfDay(new Date(currentDate)),
                    $lt:
                        periodFilterType === 'week'
                            ? dates.EndDate
                            : endOfDay(new Date(currentDate)),
                },
            };
            const results: Paginator<PastTrainings> = await paginate(this.trainingModel, condition);
            results.Results.Dates =
                periodFilterType === 'week'
                    ? dates
                    : { StartDate: new Date(currentDate), EndDate: new Date(currentDate) };
            results.Results.EarliestTrainingDate =
                (await this.getEarliestDate(loggedUserId)) ?? new Date().toString();
            results.Results.IsPreviousWeek = isPreviousWeek(
                new Date(results.Results?.EarliestTrainingDate),
                dates,
            );
            results.Results.IsNextWeek = isNextWeek(dates);
            if (periodFilterType === 'day') {
                results.Results.DayName = this.getWeekDayName(new Date(currentDate));
            }
            if (isDeleteTraining) {
                results.Results.Message = 'training.past_trainings.actions.delete_success';
            }
            return {
                IsLoading: true,
                Value: results,
                IsError: false,
            } as StreamData<Paginator<PastTrainings>>;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.past_trainings.errors.past_trainings_error_title',
            );
        }
    }

    private getWeekDayName(startDate: Date): string {
        const dayIndex = getDay(startDate);
        switch (dayIndex) {
            case 0:
                return 'weekdays.sunday';
            case 1:
                return 'weekdays.monday';
            case 2:
                return 'weekdays.tuesday';
            case 3:
                return 'weekdays.wednesday';
            case 4:
                return 'weekdays.thursday';
            case 5:
                return 'weekdays.friday';
            case 6:
                return 'weekdays.saturday';
        }
    }

    private async getEarliestDate(loggedUserId: string): Promise<string> {
        const minDate = await this.trainingModel
            .findOne(
                {
                    userId: loggedUserId,
                },
                'trainingDate -_id',
            )
            .sort({ trainingDate: 1 })
            .limit(1)
            .exec();
        return minDate?.trainingDate?.toString() ?? new Date().toISOString();
    }

    private async getLatestDate(loggedUserId: string): Promise<string> {
        const maxDate = await this.trainingModel
            .findOne(
                {
                    userId: loggedUserId,
                },
                'trainingDate -_id',
            )
            .sort({ trainingDate: -1 })
            .limit(1)
            .exec();
        return maxDate?.trainingDate?.toString() ?? new Date().toISOString();
    }
}
