import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CarFormComponent } from './components/car-form/car-form.component';

export const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'user/:id', component: UserFormComponent },
  { path: 'car/:id', component: CarFormComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full'}
]; 
