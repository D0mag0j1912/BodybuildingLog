import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../../pipes/pipes.module';
import { CamelToSnakeCaseModule } from '../../../pipes/shared/camel-to-snake-case/camel-to-snake-case.module';
import { SharedModule } from '../../shared/shared.module';
import { NewTrainingRoutingModule } from './new-training-routing.module';
import { NewTrainingComponent } from './new-training.component';
import { ReorderExercisesComponent } from './reorder-exercises/reorder-exercises.component';
import { ChangeSetCategoryComponent } from './single-exercise/sets/change-set-category/change-set-category.component';
import { SetComponent } from './single-exercise/sets/set/set.component';
import { SetsComponent } from './single-exercise/sets/sets.component';
import { SingleExerciseComponent } from './single-exercise/single-exercise.component';

const COMPONENTS = [
    NewTrainingComponent,
    ReorderExercisesComponent,
    SingleExerciseComponent,
    SetsComponent,
    ChangeSetCategoryComponent,
    SetComponent,
];

const EXTERNAL_IMPORTS = [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
    FormsModule,
    SharedModule,
];

const IMPORTS = [PipesModule, CamelToSnakeCaseModule, NewTrainingRoutingModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...IMPORTS, ...EXTERNAL_IMPORTS],
    exports: [...COMPONENTS],
})
export class NewTrainingModule {}
