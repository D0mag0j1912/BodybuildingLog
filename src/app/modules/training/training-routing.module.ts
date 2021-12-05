import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { NewTrainingComponent } from '../../views/training/new-training/new-training.component';
import { PastTrainingsComponent } from '../../views/training/past-trainings/past-trainings.component';

const routes: Routes = [
    {
        path: 'new-training',
        component: NewTrainingComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'new-training/:id',
        component: NewTrainingComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'past-trainings',
        component: PastTrainingsComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingRoutingModule {}
