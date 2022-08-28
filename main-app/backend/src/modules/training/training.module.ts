import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseController } from '../../controllers/training/new-training/get-exercise.controller';
import { NewTrainingController } from '../../controllers/training/new-training/new-training.controller';
import { DeleteTrainingActionController } from '../../controllers/training/past-trainings/delete-training-action.controller';
import { PastTrainingsController } from '../../controllers/training/past-trainings/past-trainings.controller';
import { EXERCISE_SCHEMA } from '../../models/training/exercise.model';
import { NEW_TRAINING_SCHEMA } from '../../models/training/new-training/new-training.model';
import { SET_SCHEMA } from '../../models/training/new-training/set.model';
import { SINGLE_EXERCISE_SCHEMA } from '../../models/training/new-training/single-exercise.model';
import { NewTrainingService } from '../../services/training/new-training.service';
import { PastTrainingsService } from '../../services/training/past-trainings.service';
import { DeleteTrainingActionService } from '../../services/training/training-actions/delete-training-action.service';
import { SearchTrainingsController } from '../../controllers/training/past-trainings/search-trainings.controller';
import { AuthModule } from '../auth/auth.module';
import { PreferencesModule } from '../preferences/preferences.module';
import { GetExercisesController } from '../../controllers/training/new-training/get-exercises.controller';

const CONTROLLERS = [
    ExerciseController,
    NewTrainingController,
    PastTrainingsController,
    DeleteTrainingActionController,
    SearchTrainingsController,
    GetExercisesController,
];

const SERVICES = [NewTrainingService, PastTrainingsService, DeleteTrainingActionService];

const IMPORTS = [AuthModule, PreferencesModule];

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Exercise',
                schema: EXERCISE_SCHEMA,
            },
            {
                name: 'Set',
                schema: SET_SCHEMA,
            },
            {
                name: 'SingleExercise',
                schema: SINGLE_EXERCISE_SCHEMA,
            },
            {
                name: 'Training',
                schema: NEW_TRAINING_SCHEMA,
            },
        ]),
        ...IMPORTS,
    ],
    controllers: [...CONTROLLERS],
    providers: [...SERVICES],
})
export class TrainingModule {}
