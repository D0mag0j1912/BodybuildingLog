import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AutofocusModule } from '../../directives/autofocus/autofocus.module';
import { SkeletonLoaderModule } from '../../directives/skeleton-loader/skeleton-loader.module';
import { TrainingItemDirective } from '../../directives/training-item/training-item.directive';
import { PipesModule } from '../../pipes/pipes.module';
import { SanitizeHtmlModule } from '../../pipes/shared/sanitize-html/sanitize-html.module';
import { ShowAllExercisesModule } from '../../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module';
import { NewTrainingComponent } from '../../views/training/new-training/new-training.component';
import { ReorderExercisesComponent } from '../../views/training/new-training/reorder-exercises/reorder-exercises.component';
import { SingleExerciseComponent } from '../../views/training/new-training/single-exercise/single-exercise.component';
import { PastTrainingsFiltersComponent } from '../../views/training/past-trainings/past-trainings-filters/past-trainings-filters.component';
import { PastTrainingsComponent } from '../../views/training/past-trainings/past-trainings.component';
import { ShowByDayComponent } from '../../views/training/past-trainings/show-by-day/show-by-day.component';
import { TrainingItemActionsComponent } from '../../views/training/past-trainings/training-item/training-item-actions/training-item-actions.component';
import { TrainingItemComponent } from '../../views/training/past-trainings/training-item/training-item.component';
import { SharedModule } from '../shared.module';
import { TrainingRoutingModule } from './training-routing.module';

const DIRECTIVES = [TrainingItemDirective];

const COMPONENTS = [
    NewTrainingComponent,
    PastTrainingsComponent,
    TrainingItemComponent,
    TrainingItemActionsComponent,
    PastTrainingsFiltersComponent,
    ShowByDayComponent,
    ReorderExercisesComponent,
    SingleExerciseComponent,
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
];

const PIPES_MODULES = [ShowAllExercisesModule, SanitizeHtmlModule];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES],
    imports: [...EXTERNAL_IMPORTS, ...IMPORTS, ...PIPES_MODULES],
    exports: [...COMPONENTS],
    providers: [DatePipe],
})
export class TrainingModule {}
