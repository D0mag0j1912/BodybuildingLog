import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { ShowAllExercisesModule } from '../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module';
import { NotFoundResolverService } from '../services/shared/not-found-resolver.service';
import { DeleteTrainingActionService } from '../services/api/training/delete-training-action.service';
import { DeleteExerciseDialogComponent } from '../views/shared/delete-exercise-dialog/delete-exercise-dialog.component';
import { NotFoundComponent } from '../views/shared/not-found/not-found.component';
import { SetsComponent } from '../views/shared/training/sets/sets.component';
import { SingleExerciseComponent } from '../views/shared/training/single-exercise/single-exercise.component';
import { DeleteTrainingActionComponent } from '../views/shared/training/training-actions/delete-training-action/delete-training-action.component';
import { MoreTrainingActionComponent } from '../views/shared/training/training-actions/more-training-action/more-training-action.component';
import { PaginationComponent } from '../views/shared/pagination/pagination.component';
import { PaginationDirective } from '../directives/pagination/pagination.directive';
import { DateTimePickerComponent } from '../views/shared/datetime-picker/datetime-picker.component';
import { SkeletonLoaderComponent } from '../views/shared/skeleton-loader/skeleton-loader.component';
import { SkeletonLoaderModule } from '../directives/skeleton-loader/skeleton-loader.module';
import { SanitizeHtmlModule } from '../pipes/shared/sanitize-html/sanitize-html.module';

const DIRECTIVES = [PaginationDirective];

const COMPONENTS = [
    DeleteExerciseDialogComponent,
    SingleExerciseComponent,
    SetsComponent,
    NotFoundComponent,
    PaginationComponent,
    DateTimePickerComponent,
    SkeletonLoaderComponent,
];

const ACTION_COMPONENTS = [DeleteTrainingActionComponent, MoreTrainingActionComponent];

const EXTERNAL_IMPORTS = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
];

const IMPORTS = [ShowAllExercisesModule, PipesModule, SkeletonLoaderModule, SanitizeHtmlModule];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES, ...ACTION_COMPONENTS],
    imports: [...EXTERNAL_IMPORTS, ...IMPORTS],
    exports: [...COMPONENTS],
    providers: [NotFoundResolverService, DeleteTrainingActionService],
})
export class SharedModule {}
