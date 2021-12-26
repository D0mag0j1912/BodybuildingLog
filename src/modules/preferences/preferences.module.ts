import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PREFERENCES_SCHEMA } from 'src/models/preferences/preferences.model';
import { PreferencesService } from 'src/services/preferences/preferences.service';
import { PreferencesController } from '../../controllers/preferences/preferences.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Preferences',
            schema: PREFERENCES_SCHEMA,
        }]),
        AuthModule,
    ],
    controllers: [PreferencesController],
    providers: [PreferencesService],
})
export class PreferencesModule {}