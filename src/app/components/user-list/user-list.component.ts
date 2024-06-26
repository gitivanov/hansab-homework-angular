import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import {} from '@angular/common/http';
import { ApiDataService } from '../../services/api-data.service';
import { UserDto } from '../../models/user.model'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-list.component.html',
})

export class UserListComponent implements OnInit {
  users: UserDto[] = [];
  sort: string = 'name:asc';
  search: string = '';
  errorMessage: string = '';

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.apiDataService.getAllUsers(this.sort).subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        this.errorMessage = `Please ensure the backend is started!\nERROR [${error.message}]`;
      },
      complete: () => {
        this.errorMessage = '';
      }
    });
  }

  searchUsers(): void {
    this.apiDataService.getUsersByName(this.search, this.sort).subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        this.errorMessage = `Please ensure the backend is started!\nERROR [${error.message}]`;
      },
      complete: () => {
        this.errorMessage = '';
      }
    });
  }

  sortUsers(sort: string): void {
    this.sort = sort;
    this.loadUsers();
  }
}