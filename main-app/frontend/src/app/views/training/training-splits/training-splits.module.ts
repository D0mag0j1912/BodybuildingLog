import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { TrainingSplitComponent } from './training-split/training-split.component';
import { TrainingSplitsRoutingModule } from './training-splits-routing.module';
import { TrainingSplitsSearchComponent } from './training-splits-search/training-splits-search.component';
import { TrainingSplitsComponent } from './training-splits.component';

const COMPONENTS = [TrainingSplitsComponent, TrainingSplitsSearchComponent, TrainingSplitComponent];

const IMPORTS = [TrainingSplitsRoutingModule];

const EXTERNAL_IMPORTS = [CommonModule, TranslateModule, IonicModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...IMPORTS, ...EXTERNAL_IMPORTS],
    exports: [...COMPONENTS],
})
export class TrainingSplitsModule {}
