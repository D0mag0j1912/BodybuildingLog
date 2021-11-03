import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ShowAllExercisesModule } from 'src/app/pipes/training/past-trainings/show-all-exercises.module';
import { MaterialModule } from '../../material.module';
import { DialogComponent } from './dialog/dialog.component';
import { DeleteTrainingActionComponent } from './training-actions/delete-training-action/delete-training-action.component';
import { MoreTrainingActionComponent } from './training-actions/more-training-action/more-training-action.component';

@NgModule({
    declarations: [
        DialogComponent,
        DeleteTrainingActionComponent,
        MoreTrainingActionComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TranslateModule,
        ShowAllExercisesModule,
    ],
    entryComponents: [
        DialogComponent,
        DeleteTrainingActionComponent,
    ]
})
export class SharedModule {}
