import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit {

  users: {name: string, job: string, gender: string, country: string, age: number, profilePic: string}[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.users = this.userService.anotherUsers;
  }

  showDetails(user: {name: string, job: string, gender: string, country: string, age: number, profilePic: string}) {
    this.userService.showDetails(user);
  }

}
