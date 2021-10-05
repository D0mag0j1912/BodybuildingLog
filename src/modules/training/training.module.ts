import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GetExercisesController } from "src/controllers/training/new-training/get-exercises.controller";
import { NewTrainingService } from "src/services/training/new-training.service";
import { exerciseSchema } from "src/models/training/exercise.model";
import { setSchema } from "src/models/training/new-training/set.model";
import { singleExerciseSchema } from "src/models/training/new-training/single-exercise.model";
import { newTrainingSchema } from "src/models/training/new-training/new-training.model";
import { NewTrainingController } from "src/controllers/training/new-training/new-training.controller";
import { PastTrainingsController } from "src/controllers/training/past-trainings/past-trainings.controller";
import { PastTrainingsService } from "src/services/training/past-trainings.service";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Exercise',
            schema: exerciseSchema
        }, {
            name: 'Set',
            schema: setSchema
        }, {
            name: 'SingleExercise',
            schema: singleExerciseSchema
        }, {
            name: 'Training',
            schema: newTrainingSchema
        }])
    ],
    controllers: [
        GetExercisesController,
        NewTrainingController,
        PastTrainingsController
    ],
    providers: [
        NewTrainingService,
        PastTrainingsService
    ]
})
export class TrainingModule {}