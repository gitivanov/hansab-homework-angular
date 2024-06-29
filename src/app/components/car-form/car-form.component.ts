import { Component } from '@angular/core';
import { CarDto } from '../../models/car.model';
import { ApiDataService } from '../../services/api-data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './car-form.component.html',
})
export class CarFormComponent {

  car: CarDto | null = null;
  errorMessage: string = '';
  constructor(private apiDataService: ApiDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.loadCarDetails(+carId);
    }
  }

  loadCarDetails(id: number): void {
    this.apiDataService.getCarById(id).subscribe({
      next: (data) => {
        this.car = data;
      },
      error: (error) => {
        this.errorMessage = `Error fetching car details: ${error.message}`;
      }
    });
  }
}