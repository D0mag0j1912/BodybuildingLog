import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SanitizeHtmlModule } from '../../pipes/shared/sanitize-html/sanitize-html.module';
import { TrainingSplitsSuccessService } from '../../services/helper/training-split-success.service';
import { TrainingSplitsFacadeService } from '../../store/training-splits/training-splits-facade.service';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { TrainingStoreModule } from './training-store.module';

const COMPONENTS = [TrainingComponent];

const EXTERNAL_IMPORTS = [CommonModule, IonicModule, TranslateModule];

const IMPORTS = [TrainingRoutingModule, TrainingStoreModule];

const PIPES_MODULES = [SanitizeHtmlModule];

const PROVIDERS = [TrainingSplitsSuccessService, TrainingSplitsFacadeService];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...EXTERNAL_IMPORTS, ...IMPORTS, ...PIPES_MODULES],
    exports: [...COMPONENTS],
    providers: [...PROVIDERS],
})
export class TrainingModule {}
