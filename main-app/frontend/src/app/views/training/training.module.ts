import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FeatureKeys } from '../../constants/enums/feature-keys.enum';
import { SanitizeHtmlModule } from '../../pipes/shared/sanitize-html/sanitize-html.module';
import { TrainingSplitsEffects } from '../../store/training-splits/training-splits.effects';
import * as TrainingSplitsReducers from '../../store/training-splits/training-splits.reducers';
import { TrainingSplitsSuccessService } from '../../services/helper/training-split-success.service';
import { TrainingSplitsFacadeService } from '../../store/training-splits/training-splits-facade.service';
import { TrainingComponent } from './training.component';
import { TrainingRoutingModule } from './training-routing.module';

const COMPONENTS = [TrainingComponent];

const EXTERNAL_IMPORTS = [CommonModule, IonicModule, TranslateModule];

const IMPORTS = [TrainingRoutingModule];

const PIPES_MODULES = [SanitizeHtmlModule];

const PROVIDERS = [TrainingSplitsSuccessService, TrainingSplitsFacadeService];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        ...EXTERNAL_IMPORTS,
        ...IMPORTS,
        ...PIPES_MODULES,
        StoreModule.forFeature(
            FeatureKeys.TRAINING_SPLITS,
            TrainingSplitsReducers.trainingSplitsReducer,
        ),
        EffectsModule.forFeature([TrainingSplitsEffects]),
    ],
    exports: [...COMPONENTS],
    providers: [...PROVIDERS],
})
export class TrainingModule {}
