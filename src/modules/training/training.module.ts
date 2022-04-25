import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GetExercisesController } from 'src/controllers/training/new-training/get-exercises.controller';
import { NewTrainingController } from 'src/controllers/training/new-training/new-training.controller';
import { DeleteTrainingActionController } from 'src/controllers/training/past-trainings/delete-training-action.controller';
import { PastTrainingsController } from 'src/controllers/training/past-trainings/past-trainings.controller';
import { EXERCISE_SCHEMA } from 'src/models/training/exercise.model';
import { NEW_TRAINING_SCHEMA } from 'src/models/training/new-training/training.model';
import { SET_SCHEMA } from 'src/models/training/new-training/set.model';
import { SINGLE_EXERCISE_SCHEMA } from 'src/models/training/new-training/single-exercise.model';
import { NewTrainingService } from 'src/services/training/new-training.service';
import { PastTrainingsService } from 'src/services/training/past-trainings.service';
import { DeleteTrainingActionService } from 'src/services/training/training-actions/delete-training-action.service';
import { SearchTrainingsController } from '../../controllers/training/past-trainings/search-trainings.controller';
import { AuthModule } from '../auth/auth.module';

const CONTROLLERS = [
    GetExercisesController,
    NewTrainingController,
    PastTrainingsController,
    DeleteTrainingActionController,
    SearchTrainingsController,
];

const SERVICES = [
    NewTrainingService,
    PastTrainingsService,
    DeleteTrainingActionService,
];

const IMPORTS = [AuthModule];

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Exercise',
            schema: EXERCISE_SCHEMA,
        }, {
            name: 'Set',
            schema: SET_SCHEMA,
        }, {
            name: 'SingleExercise',
            schema: SINGLE_EXERCISE_SCHEMA,
        }, {
            name: 'Training',
            schema: NEW_TRAINING_SCHEMA,
        }]),
        ...IMPORTS,
    ],
    controllers: [ ...CONTROLLERS ],
    providers: [ ...SERVICES ],
})
export class TrainingModule {}