import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingSplitsComponent } from './training-splits.component';

const routes: Routes = [
    {
        path: '',
        component: TrainingSplitsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingSplitsRoutingModule {}
