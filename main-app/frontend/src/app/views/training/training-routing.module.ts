import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTrainingModule } from './new-training/new-training.module';
import { PastTrainingsModule } from './past-trainings/past-trainings.module';
import { TrainingSplitsModule } from './training-splits/training-splits.module';
import { TrainingComponent } from './training.component';

const routes: Routes = [
    {
        path: 'tabs',
        component: TrainingComponent,
        children: [
            {
                path: 'new-training',
                loadChildren: async (): Promise<Routes | Type<NewTrainingModule>> =>
                    import('./new-training/new-training.module').then(
                        (module) => module.NewTrainingModule,
                    ),
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
                loadChildren: async (): Promise<Routes | Type<TrainingSplitsModule>> =>
                    import('./training-splits/training-splits.module').then(
                        (module) => module.TrainingSplitsModule,
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingRoutingModule {}
