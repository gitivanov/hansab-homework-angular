import { of } from 'rxjs';

export class MockCarService {
    getAllCars () {
    return of([{ id: 1, name: 'Mock Car' }]);
  }
  
  getCarById(id: number) {
    return of({ id, name: 'Mock Car' });
  }
  
}
