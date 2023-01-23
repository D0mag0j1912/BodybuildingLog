import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastTrainingsComponent } from './past-trainings.component';

const routes: Routes = [
    {
        path: '',
        component: PastTrainingsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PastTrainingsRoutingModule {}
