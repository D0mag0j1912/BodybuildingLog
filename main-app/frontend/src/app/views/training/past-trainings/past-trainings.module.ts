import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonLoaderModule } from '../../../directives/skeleton-loader/skeleton-loader.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { SanitizeHtmlModule } from '../../../pipes/shared/sanitize-html/sanitize-html.module';
import { SharedModule } from '../../shared/shared.module';
import { PastTrainingsFiltersComponent } from './past-trainings-filters/past-trainings-filters.component';
import { PastTrainingsRoutingModule } from './past-trainings-routing.module';
import { PastTrainingsComponent } from './past-trainings.component';
import { ShowByDayComponent } from './show-by-day/show-by-day.component';
import { TrainingItemActionsComponent } from './training-item/training-item-actions/training-item-actions.component';
import { TrainingItemComponent } from './training-item/training-item.component';

const COMPONENTS = [
    PastTrainingsComponent,
    TrainingItemComponent,
    TrainingItemActionsComponent,
    PastTrainingsFiltersComponent,
    ShowByDayComponent,
];

const EXTERNAL_IMPORTS = [CommonModule, TranslateModule, IonicModule];

const IMPORTS = [
    PastTrainingsRoutingModule,
    PipesModule,
    SkeletonLoaderModule,
    SharedModule,
    FormsModule,
];

const PIPES_MODULES = [SanitizeHtmlModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...IMPORTS, ...EXTERNAL_IMPORTS, ...PIPES_MODULES],
    exports: [...COMPONENTS],
    providers: [DatePipe],
})
export class PastTrainingsModule {}
