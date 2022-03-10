import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AutofocusModule } from '../../directives/autofocus/autofocus.module';
import { MaterialModule } from '../../material.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ShowAllExercisesModule } from '../../pipes/training/past-trainings/show-all-exercises/show-all-exercises.module';
import { NewTrainingComponent } from '../../views/training/new-training/new-training.component';
import { PastTrainingsFiltersComponent } from '../../views/training/past-trainings/past-trainings-filters/past-trainings-filters.component';
import { PastTrainingsComponent } from '../../views/training/past-trainings/past-trainings.component';
import { TrainingItemActionsComponent } from '../../views/training/past-trainings/training-item/training-item-actions/training-item-actions.component';
import { TrainingItemComponent } from '../../views/training/past-trainings/training-item/training-item.component';
import { SharedModule } from '../shared.module';
import { TrainingRoutingModule } from './training-routing.module';

const COMPONENTS = [
    NewTrainingComponent,
    PastTrainingsComponent,
    TrainingItemComponent,
    TrainingItemActionsComponent,
    PastTrainingsFiltersComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    IonicModule,
];

const IMPORTS = [
    TrainingRoutingModule,
    SharedModule,
    PipesModule,
    AutofocusModule,
];

const PIPES_MODULES = [ShowAllExercisesModule];

@NgModule({
    declarations: [ ...COMPONENTS ],
    imports: [
        ...EXTERNAL_IMPORTS,
        ...IMPORTS,
        ...PIPES_MODULES,
    ],
    exports: [ ...COMPONENTS ],
    providers: [
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'en-GB',
        },
        DatePipe,
    ],
})
export class TrainingModule {}
