import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./componentes/pagina-principal/page.routes').then(m => m.rout),
        canActivate: []
    },
    {
        path: 'auth',
        loadChildren: () => import('./componentes/auth/auth.routes').then(m => m.Auth)
    },
    {
        path:'user',
        loadChildren: () => import('./componentes/users/user.routes').then(m => m.User)
    }
]