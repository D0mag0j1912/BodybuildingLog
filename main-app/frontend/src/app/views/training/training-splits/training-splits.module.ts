import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { TrainingSplitsListComponent } from './training-splits-list/training-splits-list.component';
import { TrainingSplitsRoutingModule } from './training-splits-routing.module';
import { TrainingSplitsSearchComponent } from './training-splits-search/training-splits-search.component';
import { TrainingSplitsComponent } from './training-splits.component';

const COMPONENTS = [
    TrainingSplitsComponent,
    TrainingSplitsSearchComponent,
    TrainingSplitsListComponent,
];

const IMPORTS = [TrainingSplitsRoutingModule];

const EXTERNAL_IMPORTS = [TranslateModule, IonicModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...IMPORTS, ...EXTERNAL_IMPORTS],
    exports: [...COMPONENTS],
})
export class TrainingSplitsModule {}
