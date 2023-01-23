import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SanitizeHtmlModule } from '../../pipes/shared/sanitize-html/sanitize-html.module';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';

const COMPONENTS = [TrainingComponent];

const EXTERNAL_IMPORTS = [CommonModule, IonicModule, TranslateModule];

const IMPORTS = [TrainingRoutingModule];

const PIPES_MODULES = [SanitizeHtmlModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...EXTERNAL_IMPORTS, ...IMPORTS, ...PIPES_MODULES],
    exports: [...COMPONENTS],
})
export class TrainingModule {}
