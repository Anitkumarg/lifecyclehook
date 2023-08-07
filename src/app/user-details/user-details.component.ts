import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!: {
    name: string; job: string; gender: string; country: string; age: number; profilePic: string;
  };

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    console.log(this.user)
    this.userService.onShowDetailsClicked.subscribe((data : {name: string, job: string, gender: string, country: string, age: number, profilePic: string
    }) => {
      this.user = data;
    })
  }

}
