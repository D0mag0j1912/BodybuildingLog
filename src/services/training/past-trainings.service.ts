import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { getIntervalDate } from 'src/helpers/date.helper';
import { DateInterval } from 'src/helpers/date.helper';
import { NewTraining } from 'src/models/training/new-training/new-training.model';
import { PastTrainingsResponse } from 'src/models/training/past-trainings/past-trainings-response.model';

@Injectable()
export class PastTrainingsService {

    constructor(
        @InjectModel('Training') private readonly trainingModel: Model<NewTraining>,
    ){}

    async getPastTraining(trainingId: string): Promise<NewTraining> {
        try {
            // tslint:disable-next-line: await-promise
            const training: NewTraining = await this.trainingModel.findById(trainingId);
            return training as NewTraining;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'training.past_trainings.errors.error_load_training'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getPastTrainings(
        currentDate: Date,
        loggedUserId: string
    ): Promise<PastTrainingsResponse> {
        try {
            const dates: DateInterval = {
                startDate: getIntervalDate(new Date(currentDate)).startDate,
                endDate: getIntervalDate(new Date(currentDate)).endDate
            };
            
            // tslint:disable-next-line: await-promise
            const trainings: NewTraining[] = await this.trainingModel.find({
                userId: loggedUserId,
                createdAt: {
                    $gte: dates.startDate,
                    $lt: dates.endDate
                }
            }).sort({
                createdAt: 'asc'
            });
            // tslint:disable-next-line: await-promise
            const trainingsPerPage: number = await this.trainingModel.countDocuments({
                userId: loggedUserId,
                createdAt: {
                    $gte: dates.startDate,
                    $lt: dates.endDate
                }
            });
            return {
                trainings: trainings,
                dates: dates,
                trainingsPerPage: trainingsPerPage
            } as PastTrainingsResponse;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'training.past_trainings.errors.past_trainings_error_title'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}