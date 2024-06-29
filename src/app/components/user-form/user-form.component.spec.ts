import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MockApiDataService } from '../../services/mock-api-data.service';
import { ApiDataService } from '../../services/api-data.service';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appRoutes } from '../../app.routes';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let mockApiDataService = new MockApiDataService();
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UserFormComponent, RouterModule.forRoot(appRoutes)],
    providers: [ApiDataService, provideHttpClient(withFetch()), provideHttpClientTesting()]
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
