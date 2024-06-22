import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { CarListComponent } from './components/car-list/car-list.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'users', pathMatch: 'full' }, // redirect to 'users' by default
    // { path: '**', redirectTo: 'users' }, // wildcard route for a 404 page
    { path: 'users', component: UserListComponent, pathMatch: 'full' },
    { path: 'cars', component: CarListComponent, pathMatch: 'full' }, 
];