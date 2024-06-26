import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockApiDataService } from '../../services/mock-api-data.service';
import { ApiDataService } from '../../services/api-data.service';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { CarListComponent } from '../car-list/car-list.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let mockApiDataService = new MockApiDataService();
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ApiDataService],
      imports: [UserFormComponent, HttpClientTestingModule, RouterModule.forRoot(
        [{path: '', component: UserListComponent}, 
         {path: 'users', component: UserListComponent},
         {path: 'cars', component: CarListComponent},
         { path: 'user/:id', component: UserFormComponent },
         { path: '', redirectTo: 'users', pathMatch: 'full' },
         { path: '**', redirectTo: 'users', pathMatch: 'full'}])]
    })
    .overrideProvider(ApiDataService, { useValue: mockApiDataService })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
