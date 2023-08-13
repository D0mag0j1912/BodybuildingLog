import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import {
    endOfDay,
    endOfMonth,
    endOfWeek,
    endOfYear,
    getDay,
    startOfDay,
    startOfMonth,
    startOfWeek,
    startOfYear,
} from 'date-fns';
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
            let startDate: Date;
            let endDate: Date;
            const queryWordRegex = new RegExp(searchData.searchText, 'i');
            const searchCondition = {
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
            switch (periodFilterType) {
                case 'day': {
                    startDate = startOfDay(new Date(currentDate));
                    endDate = endOfDay(new Date(currentDate));
                    condition = {
                        ...searchCondition,
                        userId: loggedUserId,
                        trainingDate: {
                            $gte: startDate,
                            $lt: endDate,
                        },
                    };
                    break;
                }
                case 'week': {
                    startDate = startOfWeek(startOfDay(new Date(currentDate)), { weekStartsOn: 1 });
                    endDate = endOfWeek(endOfDay(new Date(currentDate)), { weekStartsOn: 1 });
                    condition = {
                        ...searchCondition,
                        userId: loggedUserId,
                        trainingDate: {
                            $gte: startDate,
                            $lt: endDate,
                        },
                    };
                    break;
                }
                case 'month': {
                    startDate = startOfMonth(startOfDay(new Date(currentDate)));
                    endDate = endOfMonth(endOfDay(new Date(currentDate)));
                    condition = {
                        ...searchCondition,
                        userId: loggedUserId,
                        trainingDate: {
                            $gte: startDate,
                            $lt: endDate,
                        },
                    };
                    break;
                }
                case 'year': {
                    startDate = startOfYear(startOfDay(new Date(currentDate)));
                    endDate = endOfYear(endOfDay(new Date(currentDate)));
                    condition = {
                        ...searchCondition,
                        userId: loggedUserId,
                        trainingDate: {
                            $gte: startDate,
                            $lt: endDate,
                        },
                    };
                    break;
                }
                case 'allTime': {
                    const earliestDate = await this._getEarliestDate(loggedUserId);
                    const latestDate = await this._getLatestDate(loggedUserId);
                    startDate = new Date(earliestDate);
                    endDate = new Date(latestDate);
                    break;
                }
                default: {
                    isNeverCheck(periodFilterType);
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

    private async _getEarliestDate(loggedUserId: string): Promise<string> {
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

    private async _getLatestDate(loggedUserId: string): Promise<string> {
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
