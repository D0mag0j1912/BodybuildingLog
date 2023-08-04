import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { endOfDay, getDay, startOfDay } from 'date-fns';
import { setTrainingDate, isNextWeek, isPreviousWeek } from '../../helpers/date.helper';
import { paginate } from '../../helpers/pagination.helper';
import { PaginatorDto } from '../../models/common/paginator.model';
import { NewTrainingDto } from '../../models/training/new-training/new-training.model';
import { PastTrainingsDto } from '../../models/training/past-trainings/past-trainings.model';
import { DateIntervalDto } from '../../models/common/dates.model';
import { PeriodFilterType } from '../../models/training/past-trainings/period-filter.type';
import { isNeverCheck } from '../../helpers/is-never-check';
import { StreamModelDto } from '../../models/common/stream.model';
import { PaginatorParamsDto } from '../../models/common/paginator-params.model';
import { SearchDataDto } from '../../models/common/search-data.model';

@Injectable()
export class PastTrainingsService {
    constructor(@InjectModel('Training') private _trainingModel: Model<NewTrainingDto>) {}

    async getPastTraining(trainingId: string): Promise<StreamModelDto<NewTrainingDto>> {
        try {
            const training = await this._trainingModel.findById(trainingId).exec();
            return {
                IsLoading: true,
                IsError: false,
                Value: training,
            } as StreamModelDto<NewTrainingDto>;
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
        searchData: SearchDataDto,
    ): Promise<StreamModelDto<PaginatorDto<PastTrainingsDto>>> {
        try {
            let condition: FilterQuery<NewTrainingDto>;
            let results: PaginatorDto<PastTrainingsDto>;
            if (searchData?.searchText) {
                const query: PaginatorParamsDto = {
                    Page: searchData.page,
                    Size: searchData.size,
                };
                const queryWordRegex = new RegExp(searchData.searchText, 'i');
                condition = {
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
                results = await paginate(this._trainingModel, condition, query);
                results = {
                    ...results,
                    Results: {
                        ...results.Results,
                        Dates: setTrainingDate(results?.Results.Trainings, {
                            StartDate: new Date(await this.getEarliestDate(loggedUserId)),
                            EndDate: new Date(await this.getLatestDate(loggedUserId)),
                        }),
                        DayName: this.getWeekDayName(results.Results.Dates.StartDate),
                    },
                };
            } else {
                const dates: DateIntervalDto = setTrainingDate(new Date(currentDate));
                condition = {
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
                results = await paginate(this._trainingModel, condition);
                results = {
                    ...results,
                    Results: {
                        ...results.Results,
                        Dates:
                            periodFilterType === 'week'
                                ? dates
                                : {
                                      StartDate: new Date(currentDate),
                                      EndDate: new Date(currentDate),
                                  },
                        EarliestTrainingDate:
                            (await this.getEarliestDate(loggedUserId)) ?? new Date().toString(),
                        IsPreviousWeek: isPreviousWeek(
                            new Date(results.Results?.EarliestTrainingDate),
                            dates,
                        ),
                        IsNextWeek: isNextWeek(dates),
                    },
                };
                if (periodFilterType === 'day') {
                    results = {
                        ...results,
                        Results: {
                            ...results.Results,
                            DayName: this.getWeekDayName(new Date(currentDate)),
                        },
                    };
                }
            }
            return {
                IsLoading: true,
                Value: results,
                IsError: false,
            } as StreamModelDto<PaginatorDto<PastTrainingsDto>>;
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
            default: {
                isNeverCheck(dayIndex);
            }
        }
    }

    private async getEarliestDate(loggedUserId: string): Promise<string> {
        const minDate = await this._trainingModel
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
        const maxDate = await this._trainingModel
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
