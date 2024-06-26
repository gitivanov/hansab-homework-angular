import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiDataService } from '../../services/api-data.service';
import { UserDto } from '../../models/user.model';
import { CarDto } from '../../models/car.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: UserDto | null = null;
  cars: CarDto[] = [];
  errorMessage: string = '';

  constructor(private apiDataService: ApiDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.loadUserDetails(+userId);
      this.loadUserCars(+userId);
    }
  }

  loadUserDetails(id: number): void {
    this.apiDataService.getUserById(id).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        this.errorMessage = `Error fetching user details: ${error.message}`;
      }
    });
  }

  loadUserCars(id: number): void {
    this.apiDataService.getCarsByUserId(id).subscribe({
      next: (data) => {
        this.cars = data;
      },
      error: (error) => {
        this.errorMessage = `Error fetching user cars: ${error.message}`;
      }
    });
  }
}
