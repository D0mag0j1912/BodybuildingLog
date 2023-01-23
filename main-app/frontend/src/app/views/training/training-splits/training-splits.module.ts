import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TrainingSplitsRoutingModule } from './training-splits-routing.module';
import { TrainingSplitsSearchComponent } from './training-splits-search/training-splits-search.component';
import { TrainingSplitsComponent } from './training-splits.component';

const COMPONENTS = [TrainingSplitsComponent, TrainingSplitsSearchComponent];

const IMPORTS = [TrainingSplitsRoutingModule];

const EXTERNAL_IMPORTS = [TranslateModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...IMPORTS, ...EXTERNAL_IMPORTS],
    exports: [...COMPONENTS],
})
export class TrainingSplitsModule {}
