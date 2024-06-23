import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UserDto } from '../models/user.model';
import { CarDto } from '../models/car.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor( private http: HttpClient) {}

  getAllUsers(sort: string): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${environment.apiUrl}/users?sort=${sort}`)
      .pipe(catchError(this.handleError));
  }

  getUsersByName(find: string, sort: string): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${environment.apiUrl}/users/search?find=${find}&sort=${sort}`)
      .pipe(catchError(this.handleError));
  }

  getUserById(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`$${environment.apiUrl}/users/${id}`)
      .pipe(catchError(this.handleError));
  }

  getCarsByUserId(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`$${environment.apiUrl}/users/${id}/cars`)
      .pipe(catchError(this.handleError));
  }

  getAllCars(sort: string): Observable<CarDto[]> {
    return this.http.get<CarDto[]>(`${environment.apiUrl}/cars?sort=${sort}`)
      .pipe(catchError(this.handleError));
  }

  getCarsByName(find: string, sort: string): Observable<CarDto[]> {
    return this.http.get<CarDto[]>(`${environment.apiUrl}/cars/search?find=${find}&sort=${sort}`)
      .pipe(catchError(this.handleError));
  }

  getCarById(id: number): Observable<CarDto> {
    return this.http.get<CarDto>(`${environment.apiUrl}/cars/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      // client-side or network error occurred.
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // backend returned an unsuccessful response code.
      errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}