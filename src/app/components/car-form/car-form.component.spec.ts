import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormComponent } from './car-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { CarListComponent } from '../car-list/car-list.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserListComponent } from '../user-list/user-list.component';

describe('CarFormComponent', () => {
  let component: CarFormComponent;
  let fixture: ComponentFixture<CarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarFormComponent, HttpClientTestingModule, RouterModule.forRoot(
        [{path: '', component: UserListComponent}, 
         {path: 'users', component: UserListComponent},
         {path: 'cars', component: CarListComponent},
         { path: 'user/:id', component: UserFormComponent },
         { path: '', redirectTo: 'users', pathMatch: 'full' },
         { path: '**', redirectTo: 'users', pathMatch: 'full'}])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
