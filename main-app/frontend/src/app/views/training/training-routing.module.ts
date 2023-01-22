import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingSplitsComponent } from './training-splits/training-splits.component';
import { TrainingComponent } from './training.component';

const routes: Routes = [
    {
        path: 'tabs',
        component: TrainingComponent,
        children: [
            {
                path: 'new-training',
                children: [
                    {
                        path: '',
                        component: NewTrainingComponent,
                    },
                    {
                        path: ':id',
                        component: NewTrainingComponent,
                    },
                ],
            },
            {
                path: 'past-trainings',
                component: PastTrainingsComponent,
            },
            {
                path: 'training-splits',
                component: TrainingSplitsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingRoutingModule {}
