import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarDto } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAllCars(sort: string): Observable<CarDto[]> {
    return this.http.get<CarDto[]>(`/api/cars?sort=${sort}`);
  }

  getCarsByName(find: string, sort: string): Observable<CarDto[]> {
    return this.http.get<CarDto[]>(`/api/cars/search?find=${find}&sort=${sort}`);
  }

  getCarById(id: number): Observable<CarDto> {
    return this.http.get<CarDto>(`/api/cars/${id}`);
  }
}
