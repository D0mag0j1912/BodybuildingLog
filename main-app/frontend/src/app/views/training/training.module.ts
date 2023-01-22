import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AutofocusModule } from '../../directives/autofocus/autofocus.module';
import { SkeletonLoaderModule } from '../../directives/skeleton-loader/skeleton-loader.module';
import { TrainingItemDirective } from '../../directives/training-item/training-item.directive';
import { PipesModule } from '../../pipes/pipes.module';
import { CamelToSnakeCaseModule } from '../../pipes/shared/camel-to-snake-case/camel-to-snake-case.module';
import { SanitizeHtmlModule } from '../../pipes/shared/sanitize-html/sanitize-html.module';
import { SharedModule } from '../shared/shared.module';
import { TrainingRoutingModule } from './training-routing.module';
import { NewTrainingComponent } from './new-training/new-training.component';
import { ReorderExercisesComponent } from './new-training/reorder-exercises/reorder-exercises.component';
import { ChangeSetCategoryComponent } from './new-training/single-exercise/sets/change-set-category/change-set-category.component';
import { SetComponent } from './new-training/single-exercise/sets/set/set.component';
import { SetsComponent } from './new-training/single-exercise/sets/sets.component';
import { SingleExerciseComponent } from './new-training/single-exercise/single-exercise.component';
import { PastTrainingsFiltersComponent } from './past-trainings/past-trainings-filters/past-trainings-filters.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { ShowByDayComponent } from './past-trainings/show-by-day/show-by-day.component';
import { TrainingItemActionsComponent } from './past-trainings/training-item/training-item-actions/training-item-actions.component';
import { TrainingItemComponent } from './past-trainings/training-item/training-item.component';
import { TrainingSplitsComponent } from './training-splits/training-splits.component';
import { TrainingComponent } from './training.component';
import { TrainingSplitsSearchComponent } from './training-splits/training-splits-search/training-splits-search.component';

const DIRECTIVES = [TrainingItemDirective];

const COMPONENTS = [
    TrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    TrainingItemComponent,
    TrainingItemActionsComponent,
    PastTrainingsFiltersComponent,
    ShowByDayComponent,
    ReorderExercisesComponent,
    SingleExerciseComponent,
    SetsComponent,
    ChangeSetCategoryComponent,
    SetComponent,
    TrainingSplitsComponent,
    TrainingSplitsSearchComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
];

const IMPORTS = [
    TrainingRoutingModule,
    SharedModule,
    PipesModule,
    AutofocusModule,
    SkeletonLoaderModule,
    CamelToSnakeCaseModule,
];

const PIPES_MODULES = [SanitizeHtmlModule];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    imports: [...EXTERNAL_IMPORTS, ...IMPORTS, ...PIPES_MODULES],
    exports: [...COMPONENTS],
    providers: [DatePipe],
})
export class TrainingModule {}
