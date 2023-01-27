import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthModule } from './views/auth/auth.module';
import { TrainingModule } from './views/training/training.module';
import { NotFoundResolverService } from './services/shared/not-found-resolver.service';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/training/tabs/new-training',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: async (): Promise<Routes | Type<AuthModule>> =>
            import('./views/auth/auth.module').then((module) => module.AuthModule),
    },
    {
        path: 'training',
        loadChildren: async (): Promise<Routes | Type<TrainingModule>> =>
            import('./views/training/training.module').then((module) => module.TrainingModule),
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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
