import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiDataService } from '../../services/api-data.service';
import { MockApiDataService } from '../../services/mock-api-data.service';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from '../../app.routes';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let mockApiDataService: MockApiDataService;

  beforeEach(async () => {
    mockApiDataService = new MockApiDataService();

    await TestBed.configureTestingModule({
    imports: [UserListComponent, RouterModule.forRoot(appRoutes)],
    providers: [ApiDataService, provideHttpClient(), provideHttpClientTesting()]
})
    .overrideProvider(ApiDataService, { useValue: mockApiDataService })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges(); // ngOnInit is called here
    expect(component).toBeTruthy();
  });

  it('should return mocked users', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit is called here
    tick(); // simulate the passage of time for async operations

    expect(component.users).toEqual(mockApiDataService.mockUsers);
  }));
});
