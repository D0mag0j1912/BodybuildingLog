import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { PreferencesModule } from './modules/preferences/preferences.module';
import { TrainingModule } from './modules/training/training.module';

const MY_IMPORTS = [AuthModule, PreferencesModule, TrainingModule];

@Module({
    imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/training'), ...MY_IMPORTS],
    controllers: [],
    providers: [],
})
export class AppModule {}
