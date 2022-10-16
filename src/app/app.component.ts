import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'my Website';
  slideImages = ['ph1.png', 'ph3.png', 'ph2.jpg'];
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
