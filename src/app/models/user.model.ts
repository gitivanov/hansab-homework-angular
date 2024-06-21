import { CarDto } from './car.model';

export interface UserDto {
  id: number;
  name: string;
  cars: CarDto[];
}
