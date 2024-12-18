import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { endOfDay, endOfWeek, getDay, startOfDay, startOfWeek } from 'date-fns';
import { setTrainingDate, isPrevious, isNext } from '../../helpers/date.helper';
import { paginate } from '../../helpers/pagination.helper';
import { PaginatorDto } from '../../models/common/paginator.model';
import { NewTrainingDto } from '../../models/training/new-training/new-training.model';
import { PastTrainingsDto } from '../../models/training/past-trainings/past-trainings.model';
import { DateIntervalDto } from '../../models/common/dates.model';
import { isNeverCheck } from '../../helpers/is-never-check';
import { StreamModelDto } from '../../models/common/stream.model';
import { PaginatorParamsDto } from '../../models/common/paginator-params.model';
import { PastTrainingsPayload } from '../../models/training/past-trainings/past-trainings-payload.model';

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
        payload: PastTrainingsPayload,
        userId: string,
    ): Promise<PaginatorDto<PastTrainingsDto>> {
        try {
            const searchData = payload.searchData;
            const currentDate = new Date(payload.currentDate);
            const periodFilterType = payload.periodFilterType;
            let condition: FilterQuery<NewTrainingDto>;
            let results: PaginatorDto<PastTrainingsDto>;
            const isSearch = !!searchData?.searchText;
            if (isSearch) {
                const query: PaginatorParamsDto = {
                    Page: searchData.page,
                    PerPage: searchData.perPage,
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
                            userId: userId,
                        },
                    ],
                };
                results = await paginate(this._trainingModel, condition, query);
                results = {
                    ...results,
                    Results: {
                        ...results.Results,
                        Dates: setTrainingDate(results?.Results.Trainings, {
                            StartDate: new Date(await this._getEarliestDate(userId)),
                            EndDate: new Date(await this._getLatestDate(userId)),
                        }),
                    },
                };
                results = {
                    ...results,
                    Results: {
                        ...results.Results,
                        DayName: this._getWeekDayName(results.Results.Dates.StartDate),
                    },
                };
            } else {
                const earliestDate = new Date(await this._getEarliestDate(userId));
                let dates: DateIntervalDto;
                switch (periodFilterType) {
                    case 'day': {
                        const startOfWeekDate = startOfDay(currentDate);
                        const endOfWeekDate = endOfDay(currentDate);
                        dates = {
                            StartDate: startOfWeekDate,
                            EndDate: endOfWeekDate,
                        };
                        condition = {
                            userId: userId,
                            trainingDate: {
                                $gte: startOfDay(new Date(currentDate)),
                                $lt: endOfDay(new Date(currentDate)),
                            },
                        };
                        break;
                    }
                    case 'week': {
                        const startOfDayDate = startOfWeek(startOfDay(currentDate), {
                            weekStartsOn: 1,
                        });
                        const endOfDayDate = endOfWeek(endOfDay(currentDate), { weekStartsOn: 1 });
                        dates = {
                            StartDate: startOfDayDate,
                            EndDate: endOfDayDate,
                        };
                        condition = {
                            userId: userId,
                            trainingDate: {
                                $gte: dates.StartDate,
                                $lt: dates.EndDate,
                            },
                        };
                        break;
                    }
                }
                const query = await this._trainingModel
                    .find(condition)
                    .sort({ trainingDate: 'desc' })
                    .exec();
                results = {
                    ...results,
                    Results: {
                        Trainings: query,
                        IsPrevious: isPrevious(periodFilterType, earliestDate, currentDate),
                        IsNext: isNext(periodFilterType, new Date(), currentDate),
                        EarliestTrainingDate: isSearch ? undefined : earliestDate.toISOString(),
                        DayName: isSearch ? undefined : this._getWeekDayName(new Date(currentDate)),
                        Dates: dates,
                    },
                };
            }
            return results;
        } catch (error: unknown) {
            throw new InternalServerErrorException(
                'training.past_trainings.errors.past_trainings_error_title',
            );
        }
    }

    private _getWeekDayName(startDate: Date): string {
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
