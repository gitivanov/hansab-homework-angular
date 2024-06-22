import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDto } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockUserService {
  
  getAllUsers(sort: string): Observable<UserDto[]> {
    // Mock user data with cars
    const mockUsers: UserDto[] = [
      { 
        id: 1, 
        name: 'Mock User 1', 
        cars: [
          { id: 1, name: 'Car 1', model: 'Model 1', number: '123ABC' },
          { id: 2, name: 'Car 2', model: 'Model 2', number: '456DEF' }
        ] 
      },
      { 
        id: 2, 
        name: 'Mock User 2', 
        cars: [
          { id: 3, name: 'Car 3', model: 'Model 3', number: '789GHI' }
        ] 
      }
    ];

    return of(mockUsers);
  }

  getUserById(id: number): Observable<UserDto> {
    // Mock user data for a specific user with cars
    const mockUser: UserDto = { 
      id: id, 
      name: `Mock User ${id}`, 
      cars: [
        { id: 1, name: 'Car 1', model: 'Model 1', number: '123ABC' },
        { id: 2, name: 'Car 2', model: 'Model 2', number: '456DEF' }
      ] 
    };

    return of(mockUser);
  }
}
