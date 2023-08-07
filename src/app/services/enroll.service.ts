import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }

  enroll() {
    alert('Thank you for enrolling...')
  }

}
