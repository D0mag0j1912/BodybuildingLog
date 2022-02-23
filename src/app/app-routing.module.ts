import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundResolverService } from './services/shared/not-found-resolver.service';
import { LoginComponent } from './views/auth/login/login.component';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth/login',
        component: LoginComponent,
    },
    /* {
        path: 'auth',
        loadChildren: async () => import('./modules/auth/auth.module').then(module => module.AuthModule),
    },
    {
        path: 'training',
        loadChildren: async () => import('./modules/training/training.module').then(module => module.TrainingModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        resolve: [NotFoundResolverService],
    },
    {
        path: '**',
        redirectTo: '/not-found',
    }, */
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
