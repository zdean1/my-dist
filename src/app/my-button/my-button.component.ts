import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  constructor(private _myservice: MyServiceService) { }

  ngOnInit() {
  }

  likeImage: boolean = false;
  buttonText: string = 'LIKE';


  isLiked() {
    if (this.likeImage == false){
      console.log('like!');
    } else { console.log('unlike'); }

    this.likeImage = this._myservice.likeImage(this.likeImage);
    if (this.likeImage == false){
      this.buttonText = 'LIKE';
    } else { this.buttonText = 'UNLIKE'; }
  }
}
