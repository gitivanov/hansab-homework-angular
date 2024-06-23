import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CarListComponent } from './car-list.component';
import { ApiDataService } from '../../services/api-data.service';
import { MockApiDataService } from '../../services/mock-api-data.service';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let mockApiDataService: MockApiDataService;
  
  beforeEach(async () => {
    mockApiDataService = new MockApiDataService();

    await TestBed.configureTestingModule({
      providers: [ApiDataService],
      imports: [CarListComponent]
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
