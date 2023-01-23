import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsModule } from './past-trainings/past-trainings.module';
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
                loadChildren: async (): Promise<Routes | Type<PastTrainingsModule>> =>
                    import('./past-trainings/past-trainings.module').then(
                        (module) => module.PastTrainingsModule,
                    ),
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
