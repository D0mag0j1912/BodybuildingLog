import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ShowAllExercisesModule } from '../../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module';
import { NavigationService } from '../../services/shared/navigation.service';
import { SharedService } from '../../services/shared/shared.service';
import { DeleteTrainingActionService } from '../../services/training/training-actions/delete-training-action.service';
import { DialogComponent } from './dialog/dialog.component';
import { SetsComponent } from './training/sets/sets.component';
import { SingleExerciseComponent } from './training/single-exercise/single-exercise.component';
import { DeleteTrainingActionComponent } from './training/training-actions/delete-training-action/delete-training-action.component';
import { MoreTrainingActionComponent } from './training/training-actions/more-training-action/more-training-action.component';

const COMPONENTS = [
    DialogComponent,
    SingleExerciseComponent,
    SetsComponent,
];

const ACTION_COMPONENTS = [
    DeleteTrainingActionComponent,
    MoreTrainingActionComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule,
];

const IMPORTS = [
    ShowAllExercisesModule,
    PipesModule,
];

const SERVICES = [
    SharedService,
    DeleteTrainingActionService,
    NavigationService,
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...ACTION_COMPONENTS,
    ],
    imports: [
        ...EXTERNAL_IMPORTS,
        ...IMPORTS,
    ],
    exports: [ ...COMPONENTS ],
    entryComponents: [
        DialogComponent,
        DeleteTrainingActionComponent,
    ],
    providers: [
        ...SERVICES,
    ],
})
export class SharedModule {}
