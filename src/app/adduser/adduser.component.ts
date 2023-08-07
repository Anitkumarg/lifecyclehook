import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  username: string ='';
  status: string = 'active';

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  addUser() {
    if(this.username) {
    this.userService.AddNewUser(this.username,this.status)
    }
    // console.log(this.userService.users)
  }

}
