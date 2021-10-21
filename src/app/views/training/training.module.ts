import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from "@angular/forms";
import { TrainingRoutingModule } from "./training-routing.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { SharedModule } from "../shared/shared.module";
import { NewTrainingPipe } from '../../pipes/new-training.pipe';
import { ShowAllExercisesPipe } from "src/app/pipes/show-all-exercises.pipe";
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingItemComponent } from './past-trainings/training-item/training-item.component';
import { TranslateModule } from "@ngx-translate/core";

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
