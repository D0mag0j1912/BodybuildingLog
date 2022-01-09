import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DateInterval, getIntervalDate } from '../../helpers/date.helper';
import { Data } from '../../models/common/response.model';
import { NewTrainingDto } from '../../models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../../models/training/past-trainings/past-trainings.model';

@Injectable()
export class PastTrainingsService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<NewTrainingDto>,
    ) {}
    //TODO: one method for getting past trainings
    async searchTrainings(
        searchValue: string,
        loggedInUserId: string,
    ): Promise<Data<PastTrainingsResponse>> {
        try {
            if (searchValue !== '' && searchValue) {
                // tslint:disable-next-line: await-promise
                const trainings: NewTrainingDto[] = await this.trainingModel
                    .find({
                        'exercise.exerciseName': {
                            $regex: searchValue,
                            $options: 'i',
                        },
                        userId: loggedInUserId,
                    })
                    .sort({ createdAt: 'asc' });
                // tslint:disable-next-line: await-promise
                const trainingsPerPage: number = await this.trainingModel
                    .countDocuments({
                        'exercise.exerciseName': {
                            $regex: searchValue,
                            $options: 'i',
                        },
                        userId: loggedInUserId,
                    });
                const minMaxDate: DateInterval = getIntervalDate(trainings);
                return {
                    isLoading: true,
                    value: {
                        trainings: trainings,
                        dates: minMaxDate,
                        trainingsPerPage: trainingsPerPage,
                    } as PastTrainingsResponse,
                    isError: false,
                } as Data<PastTrainingsResponse>;
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

    async getPastTraining(trainingId: string): Promise<NewTrainingDto> {
        try {
            return this.trainingModel.findById(trainingId);
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.errors.error_load_training');
        }
    }

    async getPastTrainings(
        currentDate: Date,
        loggedUserId: string,
    ): Promise<Data<PastTrainingsResponse>> {
        try {
            const dates: DateInterval = getIntervalDate(new Date(currentDate));
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
                isLoading: true,
                value: {
                    trainings: trainings,
                    dates: dates,
                    trainingsPerPage: trainingsPerPage,
                } as PastTrainingsResponse,
                isError: false,
            } as Data<PastTrainingsResponse>;
        }
        catch (error: unknown) {
            throw new InternalServerErrorException('training.past_trainings.errors.past_trainings_error_title');
        }
    }
}