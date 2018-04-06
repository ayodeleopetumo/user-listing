import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: object;
  selectedUser: any[];
  isEdited: boolean;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => (this.users = users));
  }

  setSelectedUser(user): void {
    this.selectedUser = null;

    setTimeout(() => {
      this.selectedUser = user;
    }, 500);
  }
}
