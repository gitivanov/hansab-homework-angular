import { of } from "rxjs";
import { UserDto } from "../models/user.model";
import { CarDto } from "../models/car.model";

export class MockApiDataService {
    mockUsers: UserDto[] = [
      { id: 1, name: 'Mock User 1', cars: [] },
      { id: 2, name: 'Mock User 2', cars: [] }
    ];
  
    mockCars: CarDto[] = [
        { id: 1, name: 'Mock Car 1', model: "Mock model", number: "Mock number" },
        { id: 2, name: 'Mock Car 2', model: "Mock model", number: "Mock number" }
    ];

    getAllUsers(sort: string) {
      return of(this.mockUsers);
    }
  
    getUsersByName(name: string, sort: string) {
      return of(this.mockUsers.filter(user => user.name.includes(name)));
    }

    getAllCars(sort: string) {
        return of(this.mockCars);
    }

    getCarsByNumber(number: string, sort: string) {
        return of(this.mockCars.filter(car => car.number.includes(number)));
      }
  }