import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import * as fromTrainingSplits from '../../../store/training-splits/training-splits-index';
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

const IMPORTS = [TrainingSplitsRoutingModule];

const EXTERNAL_IMPORTS = [CommonModule, TranslateModule, IonicModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        ...IMPORTS,
        ...EXTERNAL_IMPORTS,
        StoreModule.forFeature('trainingSplits', fromTrainingSplits.reducers),
    ],
    exports: [...COMPONENTS],
})
export class TrainingSplitsModule {}
