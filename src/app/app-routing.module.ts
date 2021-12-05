import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule),
    },
    {
        path: 'training',
        loadChildren: () => import('./modules/training/training.module').then(module => module.TrainingModule),
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: '/not-found',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
    })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
