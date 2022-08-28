import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PREFERENCES_SCHEMA } from '../../models/preferences/preferences.model';
import { PreferencesService } from '../../services/preferences/preferences.service';
import { PreferencesController } from '../../controllers/preferences/preferences.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Preferences',
                schema: PREFERENCES_SCHEMA,
            },
        ]),
        AuthModule,
    ],
    controllers: [PreferencesController],
    providers: [PreferencesService],
    exports: [PreferencesService],
})
export class PreferencesModule {}
