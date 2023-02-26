import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';
import * as trainingSplitsReducers from '../../../store/training-splits/training-splits-form.reducers';
import { SharedModule } from '../../shared/shared.module';
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

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        ...IMPORTS,
        ...EXTERNAL_IMPORTS,
        StoreModule.forFeature('trainingSplits', trainingSplitsReducers.trainingSplitsFormReducer),
    ],
    exports: [...COMPONENTS],
})
export class TrainingSplitsModule {}
