import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.sass']
})
export class SlideshowComponent implements OnInit {

  constructor() { }
  
  title = 'my Website';
  slideImages = ['ph1.jpg', 'ph3.png', 'ph2.jpg'];
  headlines = ['Bring engineering to the next level', 'Born to code', 'Head up to lerning'];
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.slideshow();
  }

  slideshow(){
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.slideImages.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 1)
    },8000)
  }
}
