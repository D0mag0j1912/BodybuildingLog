import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material.module';
import { PipesModule } from '../pipes/pipes.module';
import { RoundTotalWeightModule } from '../pipes/training/new-training/round-total-weight/round-total-weight.module';
import { ShowAllExercisesModule } from '../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module';
import { NotFoundResolverService } from '../services/shared/not-found-resolver.service';
import { DeleteTrainingActionService } from '../services/training/training-actions/delete-training-action.service';
import { DeleteExerciseDialogComponent } from '../views/shared/delete-exercise-dialog/delete-exercise-dialog.component';
import { NotFoundComponent } from '../views/shared/not-found/not-found.component';
import { SetsComponent } from '../views/shared/training/sets/sets.component';
import { SingleExerciseComponent } from '../views/shared/training/single-exercise/single-exercise.component';
import { TotalWeightComponent } from '../views/shared/training/total-weight/total-weight.component';
import { DeleteTrainingActionComponent } from '../views/shared/training/training-actions/delete-training-action/delete-training-action.component';
import { MoreTrainingActionComponent } from '../views/shared/training/training-actions/more-training-action/more-training-action.component';
import { PaginationComponent } from '../views/shared/pagination/pagination.component';
import { PaginationDirective } from '../directives/pagination/pagination.directive';

const DIRECTIVES = [PaginationDirective];

const COMPONENTS = [
    DeleteExerciseDialogComponent,
    SingleExerciseComponent,
    SetsComponent,
    TotalWeightComponent,
    NotFoundComponent,
    PaginationComponent,
];

const ACTION_COMPONENTS = [
    DeleteTrainingActionComponent,
    MoreTrainingActionComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule,
    IonicModule,
];

const IMPORTS = [
    ShowAllExercisesModule,
    PipesModule,
    RoundTotalWeightModule,
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES,
        ...ACTION_COMPONENTS,
    ],
    imports: [
        ...EXTERNAL_IMPORTS,
        ...IMPORTS,
    ],
    exports: [ ...COMPONENTS ],
    entryComponents: [
        DeleteExerciseDialogComponent,
        DeleteTrainingActionComponent,
    ],
    providers: [
        NotFoundResolverService,
        DeleteTrainingActionService,
    ],
})
export class SharedModule { }
