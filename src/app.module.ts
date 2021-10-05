import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { TrainingModule } from './modules/training/training.module';
import { CheckAuthMiddleware } from './middleware/check-auth.middleware';
import { GetExercisesController } from './controllers/training/new-training/get-exercises.controller';
import { NewTrainingController } from './controllers/training/new-training/new-training.controller';
import { PastTrainingsController } from './controllers/training/past-trainings/past-trainings.controller';
import { APP_PIPE } from '@nestjs/core';
import { PreferencesModule } from './modules/preferences/preferences.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb://localhost:27017/training'
        ),
        AuthModule,
        PreferencesModule,
        TrainingModule
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_PIPE,
            useClass: ValidationPipe
        }
    ],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer
            .apply(CheckAuthMiddleware)
            .forRoutes(
                GetExercisesController,
                NewTrainingController,
                PastTrainingsController
            );
    }
}
