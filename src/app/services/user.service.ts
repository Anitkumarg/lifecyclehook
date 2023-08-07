import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {name: 'John' , status: 'active'},
    {name: 'Mark' , status: 'inactive'},
    {name: 'Steve', status: 'active'}
  ]

  AddNewUser(name: string , status: string) {
    this.users.push({name: name , status : status})
  }

  anotherUsers = [
    {name: 'Eugenio', job: 'Teacher', gender: 'Male', country: 'United State', age: 38, profilePic: '../../assets/eugenio.jpg'},
    {name: 'Steve', job: 'Doctor', gender: 'Male', country: 'United Kingdom', age: 42, profilePic: '../../assets/steve.jpg'},
    {name: 'Marco', job: 'Developer', gender: 'Male', country: 'Austrelia', age: 38, profilePic: '../../assets/marco.jpg'},
    {name: 'Tina', job: 'Engineer', gender: 'Female', country: 'India', age: 26, profilePic: '../../assets/tina.jpg'}
  ]

  onShowDetailsClicked = new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, profilePic: string}>();

  showDetails(user : {name: string, job: string, gender: string, country: string, age: number, profilePic: string}) {
    this.onShowDetailsClicked.emit(user);
  }

}
