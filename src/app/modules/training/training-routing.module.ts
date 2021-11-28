import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTrainingComponent } from '../../views/training/new-training/new-training.component';
import { PastTrainingsComponent } from '../../views/training/past-trainings/past-trainings.component';

const routes: Routes = [
    {
        path: '',
        component: NewTrainingComponent,
    },
    {
        path: 'past-trainings',
        component: PastTrainingsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingRoutingModule{}
