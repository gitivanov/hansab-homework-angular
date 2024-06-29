import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CarListComponent } from './car-list.component';
import { ApiDataService } from '../../services/api-data.service';
import { MockApiDataService } from '../../services/mock-api-data.service';
import { RouterModule } from '@angular/router';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from '../../app.routes';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let mockApiDataService: MockApiDataService;
  
  beforeEach(async () => {
    mockApiDataService = new MockApiDataService();

    await TestBed.configureTestingModule({
    imports: [CarListComponent, RouterModule.forRoot(appRoutes)],
    providers: [ApiDataService, provideHttpClient(), provideHttpClientTesting()]
})
    .overrideProvider(ApiDataService, { useValue: mockApiDataService })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should return mocked cars', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit is called here
    tick(); // simulate the passage of time for async operations

    expect(component.cars).toEqual(mockApiDataService.mockCars);
  }));
});
