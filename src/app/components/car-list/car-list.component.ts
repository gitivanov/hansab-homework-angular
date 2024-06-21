import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { CarService } from '../../services/car.service';
import { CarDto } from '../../models/car.model';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: CarDto[] = [];
  sort: string = 'name:asc';
  search: string = '';

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getAllCars(this.sort).subscribe(cars => {
      this.cars = cars;
    });
  }

  searchCars(): void {
    this.carService.getCarsByName(this.search, this.sort).subscribe(cars => {
      this.cars = cars;
    });
  }

  sortCars(sort: string): void {
    this.sort = sort;
    this.loadCars();
  }
}
