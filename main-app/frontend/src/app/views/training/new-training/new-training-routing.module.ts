import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTrainingComponent } from './new-training.component';

const routes: Routes = [
    {
        path: '',
        component: NewTrainingComponent,
    },
    {
        path: ':id',
        component: NewTrainingComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewTrainingRoutingModule {}
