import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import {} from '@angular/common/http';
import { ApiDataService } from '../../services/api-data.service';
import { CarDto } from '../../models/car.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './car-list.component.html',
})
export class CarListComponent implements OnInit {
  cars: CarDto[] = [];
  sort: string = 'number:asc';
  search: string = '';
  errorMessage: string = '';

  constructor(private apiDataService: ApiDataService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.apiDataService.getAllCars(this.sort).subscribe({
      next: (data) => {
        this.cars = data;
      },
      error: (error) => {
        this.errorMessage = `Please ensure the backend is started!\nERROR [${error.message}]`;
      },
      complete: () => {
        this.errorMessage = '';
      }
    });
  }

  searchCars(): void {
    this.apiDataService.getCarsByName(this.search, this.sort).subscribe(cars => {
      this.cars = cars;
    });
  }

  sortCars(sort: string): void {
    this.sort = sort;
    this.loadCars();
  }
}
