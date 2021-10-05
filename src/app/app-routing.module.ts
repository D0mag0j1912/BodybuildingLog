import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NewTrainingComponent } from "./views/training/new-training/new-training.component";
import { PastTrainingsComponent } from "./views/training/past-trainings/past-trainings.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'new-training',
        /* loadChildren: () => import('./training/training.module').then(module => module.TrainingModule) */
        component: NewTrainingComponent
    },
    {
        path: 'new-training/:id',
        component: NewTrainingComponent
    },
    {
        path: 'past-trainings',
        component: PastTrainingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
