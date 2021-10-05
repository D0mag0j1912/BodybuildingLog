import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GeneralResponseData } from "src/app.service";
import { Exercise } from "src/models/training/exercise.model";
import { NewTraining } from '../../models/training/new-training/new-training.model';

@Injectable()
export class NewTrainingService {

    constructor(
        @InjectModel('Exercise') private readonly exerciseModel: Model<Exercise>,
        @InjectModel('Training') private readonly trainingModel: Model<NewTraining>
    ){}

    //do
    async editTraining(
        trainingId: string,
        updatedTrainingData: NewTraining
    ): Promise<GeneralResponseData> {
        try {
            await this.trainingModel.updateOne({
                _id: trainingId
            }, {
                $set: updatedTrainingData
            });
            return {
                message: 'Training updated.'
            } as GeneralResponseData;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Error while trying to update training.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async addTraining(
        trainingData: NewTraining
    ): Promise<GeneralResponseData> {
        try {
            await this.trainingModel.create(trainingData);
            return {
                message: 'Training saved.'
            } as GeneralResponseData;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Error while trying to save training.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getExercises()
        : Promise<Exercise[]> {
        try {
            const exercises: Exercise[] = await this.exerciseModel.find();
            if(exercises.length === 0){
                throw new HttpException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Exercises not available.'
                }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return exercises;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Exercises not available.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}