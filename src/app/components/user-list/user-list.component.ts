import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { UserDto } from '../../models/user.model'; 

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: UserDto[] = [];
  sort: string = 'name:asc';
  search: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers(this.sort).subscribe(users => {
      this.users = users;
    });
  }

  searchUsers(): void {
    this.userService.getUsersByName(this.search, this.sort).subscribe(users => {
      this.users = users;
    });
  }

  sortUsers(sort: string): void {
    this.sort = sort;
    this.loadUsers();
  }
}