import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  texto = 'Jonathan';
  count = 0;
  aparecer = true;
  imageSource = 'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';
  constructor() { }

  ngOnInit() {
  }
  presionaMe() {
    // this.count = this.count + 1;
    this.count += 1;
    this.aparecer = !this.aparecer;
  }

}
