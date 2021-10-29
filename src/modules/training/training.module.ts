import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GetExercisesController } from 'src/controllers/training/new-training/get-exercises.controller';
import { NewTrainingController } from 'src/controllers/training/new-training/new-training.controller';
import { PastTrainingsController } from 'src/controllers/training/past-trainings/past-trainings.controller';
import { exerciseSchema } from 'src/models/training/exercise.model';
import { NEW_TRAINING_SCHEMA } from 'src/models/training/new-training/new-training.model';
import { SET_SCHEMA } from 'src/models/training/new-training/set.model';
import { SINGLE_EXERCISE_SCHEMA } from 'src/models/training/new-training/single-exercise.model';
import { NewTrainingService } from 'src/services/training/new-training.service';
import { PastTrainingsService } from 'src/services/training/past-trainings.service';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Exercise',
            schema: exerciseSchema
        }, {
            name: 'Set',
            schema: SET_SCHEMA
        }, {
            name: 'SingleExercise',
            schema: SINGLE_EXERCISE_SCHEMA
        }, {
            name: 'Training',
            schema: NEW_TRAINING_SCHEMA
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