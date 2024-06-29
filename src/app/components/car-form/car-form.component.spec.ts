import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarFormComponent } from './car-form.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from '../../app.routes';

describe('CarFormComponent', () => {
  let component: CarFormComponent;
  let fixture: ComponentFixture<CarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CarFormComponent, RouterModule.forRoot(appRoutes)],
    providers: [provideHttpClient(), provideHttpClientTesting()]
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
