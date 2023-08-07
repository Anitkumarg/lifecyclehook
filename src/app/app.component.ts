import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lifecyclehook';

  inputText : string = '';
  destroy : boolean = true;

  display: boolean = false;

  occupation : string = 'doctor';
  users: {name: string , status: string}[] = [];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
    console.log(this.users);
  }

  onSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }

  destroyComponent() {
    this.destroy = false;
  }

  showNotice() {
    this.display = true;
  }
}
