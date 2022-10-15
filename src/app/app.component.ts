import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'my Website';
  slideImages = ['ph1.png', 'ph2.jpg', 'ph3.png'];
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
