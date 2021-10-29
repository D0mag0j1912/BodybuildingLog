import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { ShowAllExercisesPipe } from 'src/app/pipes/show-all-exercises.pipe';
import { MaterialModule } from '../../material.module';
import { NewTrainingPipe } from '../../pipes/new-training.pipe';
import { SharedModule } from '../shared/shared.module';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingItemComponent } from './past-trainings/training-item/training-item.component';
import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
    declarations: [
        NewTrainingComponent,
        NewTrainingPipe,
        ShowAllExercisesPipe,
        PastTrainingsComponent,
        TrainingItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
        TrainingRoutingModule,
        SharedModule,
        TranslateModule
    ],
    exports: [
        NewTrainingComponent,
        PastTrainingsComponent,
        TrainingItemComponent
    ],
    providers: [{
        provide: MAT_DATE_LOCALE,
        useValue: 'en-GB'
    }]
})
export class TrainingModule {}
