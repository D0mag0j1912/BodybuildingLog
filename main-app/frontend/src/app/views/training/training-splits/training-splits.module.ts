import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';
import { EffectsModule } from '@ngrx/effects';
import { FeatureKeys } from '../../../constants/enums/feature-keys.enum';
import { TrainingSplitsFacadeService } from '../../../store/training-splits/training-splits-facade.service';
import * as trainingSplitsReducers from '../../../store/training-splits/training-splits.reducers';
import { SharedModule } from '../../shared/shared.module';
import { TrainingSplitsEffects } from '../../../store/training-splits/training-splits.effects';
import { CreateTrainingSplitComponent } from './create-training-split/create-training-split.component';
import { TrainingSplitComponent } from './training-split/training-split.component';
import { TrainingSplitsRoutingModule } from './training-splits-routing.module';
import { TrainingSplitsSearchComponent } from './training-splits-search/training-splits-search.component';
import { TrainingSplitsComponent } from './training-splits.component';

const COMPONENTS = [
    TrainingSplitsComponent,
    TrainingSplitsSearchComponent,
    TrainingSplitComponent,
    CreateTrainingSplitComponent,
];

const IMPORTS = [TrainingSplitsRoutingModule, ReactiveFormsModule, FormsModule, SharedModule];

const EXTERNAL_IMPORTS = [CommonModule, TranslateModule, IonicModule, SwiperModule];

const PROVIDERS = [TrainingSplitsFacadeService];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        ...IMPORTS,
        ...EXTERNAL_IMPORTS,
        StoreModule.forFeature(
            FeatureKeys.TRAINING_SPLITS,
            trainingSplitsReducers.trainingSplitsReducer,
        ),
        EffectsModule.forFeature([TrainingSplitsEffects]),
    ],
    exports: [...COMPONENTS],
    providers: [...PROVIDERS],
})
export class TrainingSplitsModule {}
