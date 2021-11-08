import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ShowAllExercisesModule } from 'src/app/pipes/training/past-trainings/show-all-exercises/show-all-exercises.module';
import { DeleteTrainingActionService } from 'src/app/services/training/training-actions/delete-training-action.service';
import { MaterialModule } from '../../material.module';
import { NavigationService } from '../../services/shared/navigation.service';
import { SharedService } from '../../services/shared/shared.service';
import { DialogComponent } from './dialog/dialog.component';
import { DeleteTrainingActionComponent } from './training-actions/delete-training-action/delete-training-action.component';
import { MoreTrainingActionComponent } from './training-actions/more-training-action/more-training-action.component';

const COMPONENTS = [
    DialogComponent,
];

const ACTION_COMPONENTS = [
    DeleteTrainingActionComponent,
    MoreTrainingActionComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    MaterialModule,
    TranslateModule,
];

const MY_IMPORTS = [ShowAllExercisesModule];

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
        ...MY_IMPORTS,
    ],
    entryComponents: [
        DialogComponent,
        DeleteTrainingActionComponent,
    ],
    providers: [
        ...SERVICES,
    ],
})
export class SharedModule {}
