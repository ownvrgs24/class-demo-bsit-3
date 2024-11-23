import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { authGuard, mainGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [mainGuard]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
