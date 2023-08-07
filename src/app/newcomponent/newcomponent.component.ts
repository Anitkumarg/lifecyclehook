import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service'
 
@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {

  mostlikedvideo : any;

  constructor(private enrollService : EnrollService) { }

  ngOnInit(): void {
    this.mostlikedvideo = this.getmostlikedvideo();
  }

  videos = [
    {title: 'My video 1', share: 415, likes: 312, dislikes: 240 , thumbnails: "../../assets/image1.jpg"},
    {title: 'My video 2', share: 400, likes: 360, dislikes: 248 , thumbnails: '../../assets/image2.jpg'},
    {title: 'My video 3', share: 480, likes: 245, dislikes: 224 , thumbnails: '../../assets/image3.jpg'}
  ]

  getmostlikedvideo() {
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr,next) => next.likes - curr.likes)[0];
  }

  courseEnroll() {
    // console.log(this.enrollService)
    this.enrollService.enroll();
  }

}
