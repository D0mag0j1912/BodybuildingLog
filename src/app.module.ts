import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetExercisesController } from './controllers/training/new-training/get-exercises.controller';
import { NewTrainingController } from './controllers/training/new-training/new-training.controller';
import { DeleteTrainingActionController } from './controllers/training/past-trainings/delete-training-action.controller';
import { PastTrainingsController } from './controllers/training/past-trainings/past-trainings.controller';
import { CheckAuthMiddleware } from './middleware/check-auth.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { PreferencesModule } from './modules/preferences/preferences.module';
import { TrainingModule } from './modules/training/training.module';

const MY_IMPORTS = [
    AuthModule,
    PreferencesModule,
    TrainingModule,
];

const CONTROLLERS = [AppController];

const SERVICES = [AppService];

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb://localhost:27017/training',
        ),
        ...MY_IMPORTS,
    ],
    controllers: [ ...CONTROLLERS ],
    providers: [ ...SERVICES ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(CheckAuthMiddleware)
            .forRoutes(
                GetExercisesController,
                NewTrainingController,
                PastTrainingsController,
                DeleteTrainingActionController,
            );
    }
}
