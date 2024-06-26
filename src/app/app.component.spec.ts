import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { UserListComponent } from './components/user-list/user-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot(
        [{path: '', component: UserListComponent}, 
         {path: 'users', component: UserListComponent},
         {path: 'cars', component: CarListComponent},
         { path: 'user/:id', component: UserFormComponent },
         { path: '', redirectTo: 'users', pathMatch: 'full' },
         { path: '**', redirectTo: 'users', pathMatch: 'full'}])
        ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
  it(`should have the 'Hansab Homework Angular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hansab Homework Angular');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('User and Car Management');
  // });
});
