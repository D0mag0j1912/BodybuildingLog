import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SkeletonLoaderModule } from '../../../directives/skeleton-loader/skeleton-loader.module';
import { TrainingItemDirective } from '../../../directives/training-item/training-item.directive';
import { PipesModule } from '../../../pipes/pipes.module';
import { SanitizeHtmlModule } from '../../../pipes/shared/sanitize-html/sanitize-html.module';
import { SharedModule } from '../../shared/shared.module';
import * as PastTrainingsReducer from '../../../store/past-trainings/reducers/past-trainings.reducer';
import { FeatureKeys } from '../../../constants/enums/feature-keys.enum';
import { PastTrainingsEffects } from '../../../store/past-trainings/effects/past-trainings.effects';
import { PastTrainingsFiltersComponent } from './past-trainings-filters/past-trainings-filters.component';
import { PastTrainingsRoutingModule } from './past-trainings-routing.module';
import { PastTrainingsComponent } from './past-trainings.component';
import { TrainingItemActionsComponent } from './training-item/training-item-actions/training-item-actions.component';
import { TrainingItemComponent } from './training-item/training-item.component';
import { PastTrainingsFiltersDialogComponent } from './past-trainings-filters-dialog/past-trainings-filters-dialog.component';

const DIRECTIVES = [TrainingItemDirective];

const COMPONENTS = [
    PastTrainingsComponent,
    TrainingItemComponent,
    TrainingItemActionsComponent,
    PastTrainingsFiltersComponent,
    PastTrainingsFiltersDialogComponent,
];

const EXTERNAL_IMPORTS = [CommonModule, TranslateModule, IonicModule];

const IMPORTS = [
    PastTrainingsRoutingModule,
    PipesModule,
    SkeletonLoaderModule,
    SharedModule,
    FormsModule,
    StoreModule.forFeature(FeatureKeys.PAST_TRAININGS, PastTrainingsReducer.pastTrainingsReducer),
    EffectsModule.forFeature([PastTrainingsEffects]),
];

const PIPES_MODULES = [SanitizeHtmlModule];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    imports: [...IMPORTS, ...EXTERNAL_IMPORTS, ...PIPES_MODULES],
    exports: [...COMPONENTS],
    providers: [DatePipe],
})
export class PastTrainingsModule {}
