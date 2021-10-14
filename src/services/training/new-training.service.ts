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

    async editTraining(
        trainingId: string,
        updatedTrainingData: NewTraining
    ): Promise<GeneralResponseData> {
        try {
            //TODO: Ovdje trebam pitati je li trening koji se hoće editirati napravljen od strane trenutno logiranog usera
            await this.trainingModel.updateOne({
                _id: trainingId
            }, {
                $set: updatedTrainingData
            });
            return {
                message: 'training.new_training.training_updated'
            } as GeneralResponseData;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'training.new_training.errors.error_update_training'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async addTraining(
        trainingData: NewTraining
    ): Promise<GeneralResponseData> {
        try {
            await this.trainingModel.create(trainingData);
            return {
                message: 'training.new_training.training_saved'
            } as GeneralResponseData;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'training.new_training.errors.error_save_training'
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
                    message: 'training.new_training.errors.exercises_not_available'
                }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return exercises;
        }
        catch(error: unknown) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'training.new_training.errors.exercises_not_available'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}