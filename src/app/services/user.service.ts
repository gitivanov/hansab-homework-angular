import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(sort: string): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`/api/users?sort=${sort}`);
  }

  getUsersByName(find: string, sort: string): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`/api/users/search?find=${find}&sort=${sort}`);
  }

  getUserById(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`/api/users/${id}`);
  }

  getCarsByUserId(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`/api/users/${id}/cars`);
  }
}
