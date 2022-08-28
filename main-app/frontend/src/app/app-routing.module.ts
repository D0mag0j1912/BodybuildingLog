import { NgModule, Type } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { NotFoundResolverService } from './services/shared/not-found-resolver.service';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: async (): Promise<Routes | Type<AuthModule>> =>
            import('./modules/auth/auth.module').then((module) => module.AuthModule),
    },
    {
        path: 'training',
        loadChildren: async (): Promise<Routes | Type<AuthModule>> =>
            import('./modules/training/training.module').then((module) => module.TrainingModule),
        canLoad: [AuthGuard],
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        resolve: [NotFoundResolverService],
    },
    {
        path: '**',
        redirectTo: '/not-found',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
