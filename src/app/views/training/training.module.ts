import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ShowAllExercisesModule } from 'src/app/pipes/training/past-trainings/show-all-exercises/show-all-exercises.module';
import { MaterialModule } from '../../material.module';
import { NewTrainingService } from '../../services/training/new-training.service';
import { PastTrainingsService } from '../../services/training/past-trainings.service';
import { SharedModule } from '../shared/shared.module';
import { NewTrainingComponent } from './new-training/new-training.component';
import { SetsComponent } from './new-training/sets/sets.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingItemActionsComponent } from './past-trainings/training-item/training-item-actions/training-item-actions.component';
import { TrainingItemComponent } from './past-trainings/training-item/training-item.component';
import { TrainingRoutingModule } from './training-routing.module';

const SERVICES = [
    PastTrainingsService,
    NewTrainingService,
];

const COMPONENTS = [
    NewTrainingComponent,
    SetsComponent,
    PastTrainingsComponent,
    TrainingItemComponent,
    TrainingItemActionsComponent,
];

const EXTERNAL_MODULES = [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
];

const MY_MODULES = [
    TrainingRoutingModule,
    SharedModule,
    PipesModule,
];

const PIPES_MODULES = [ShowAllExercisesModule];

@NgModule({
    declarations: [
        ...COMPONENTS,
    ],
    imports: [
        ...EXTERNAL_MODULES,
        ...MY_MODULES,
        ...PIPES_MODULES,
    ],
    exports: [
        ...COMPONENTS,
    ],
    providers: [
        ...SERVICES,
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'en-GB',
        },
        DatePipe,
    ],
})
export class TrainingModule {}
