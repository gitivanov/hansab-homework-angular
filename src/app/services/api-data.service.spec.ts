import { TestBed } from '@angular/core/testing';
import { ApiDataService } from './api-data.service';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../models/user.model';
import { of } from 'rxjs';
import { CarDto } from '../models/car.model';

describe('ApiDataService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let apiDataService: ApiDataService;

  let mockUsers: UserDto[] = [
    { id: 1, name: 'Mock User 1', cars: [] },
    { id: 2, name: 'Mock User 2', cars: [] }
  ];
  
  let mockCars: CarDto[] = [
    { id: 1, name: 'BMW', model:"X1", number:"111BMW" },
    { id: 2, name: 'AUDI', model:"A6", number: "222AAA" }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    apiDataService = new ApiDataService(httpClientSpy);
  });

  it('should be created', () => {
    expect(apiDataService).toBeTruthy();
  });

  it('should return mocked users', ()=> {
    let sort: string = 'name:asc';
    httpClientSpy.get.and.returnValue(of(mockUsers));
    apiDataService.getAllUsers(sort).subscribe(users => {    
        expect(users).toEqual(mockUsers);
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('should return mocked cars', ()=> {
    httpClientSpy.get.and.returnValue(of(mockCars));
    apiDataService.getAllCars('name:asc').subscribe(cars => {    
        expect(cars).toEqual(mockCars);
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
