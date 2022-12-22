import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTrainingComponent } from '../../views/training/new-training/new-training.component';
import { PastTrainingsComponent } from '../../views/training/past-trainings/past-trainings.component';
import { TrainingComponent } from '../../views/training/training.component';

const routes: Routes = [
    {
        path: 'tabs',
        component: TrainingComponent,
        children: [
            {
                path: 'new-training',
                component: NewTrainingComponent,
            },
            {
                path: 'new-training/:id',
                component: NewTrainingComponent,
            },
            {
                path: 'past-trainings',
                component: PastTrainingsComponent,
            },
        ],
    },
    {
        path: '',
        redirectTo: '/training/tabs/new-training',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingRoutingModule {}
