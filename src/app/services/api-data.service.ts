import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user.model';
import { CarDto } from '../models/car.model';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(
    private http: HttpClient, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {  
    console.log(`api url ${environment.apiUrl}`);
  }

  getAllUsers(sort: string): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${environment.apiUrl}/users?sort=${sort}`);
  }

  getUsersByName(find: string, sort: string): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${environment.apiUrl}/users/search?find=${find}&sort=${sort}`);
  }

  getUserById(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`$${environment.apiUrl}/users/${id}`);
  }

  getCarsByUserId(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`$${environment.apiUrl}/users/${id}/cars`);
  }

  getAllCars(sort: string): Observable<CarDto[]> {
    return this.http.get<CarDto[]>(`${environment.apiUrl}/cars?sort=${sort}`);
  }

  getCarsByName(find: string, sort: string): Observable<CarDto[]> {
    return this.http.get<CarDto[]>(`${environment.apiUrl}/cars/search?find=${find}&sort=${sort}`);
  }

  getCarById(id: number): Observable<CarDto> {
    return this.http.get<CarDto>(`${environment.apiUrl}/cars/${id}`);
  }
}
