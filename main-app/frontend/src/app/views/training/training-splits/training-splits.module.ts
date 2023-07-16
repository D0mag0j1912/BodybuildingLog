import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TimesAWeekModule } from '../../../pipes/training/training-splits/times-a-week/times-a-week.module';
import { NumberTranslateModule } from '../../../pipes/shared/number-translation/number-translate.module';
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

const IMPORTS = [
    TrainingSplitsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    TimesAWeekModule,
    NumberTranslateModule,
];

const EXTERNAL_IMPORTS = [CommonModule, TranslateModule, IonicModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...IMPORTS, ...EXTERNAL_IMPORTS],
    exports: [...COMPONENTS],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrainingSplitsModule {}
