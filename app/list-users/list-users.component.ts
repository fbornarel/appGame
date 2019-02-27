import { Component, OnInit } from '@angular/core';

import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public users : User[];

  constructor( private userService : UserService ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.users
    .subscribe(users => this.users = users);

  }
}
