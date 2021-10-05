import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { preferencesSchema } from "src/models/preferences/preferences.model";
import { PreferencesService } from "src/services/preferences/preferences.service";
import { PreferencesController } from '../../controllers/preferences/preferences.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Preferences',
            schema: preferencesSchema
        }])
    ],
    controllers: [PreferencesController],
    providers: [PreferencesService]
})
export class PreferencesModule {}