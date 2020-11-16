import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf1paperclick';
  image: String[] = ['assets/img/boat.jpg', 'assets/img/book.jpg', 'assets/img/cabbage-paper.jpg', 'assets/img/pile.jpg']
  selectedImage: String
  counter : number = 0
  ngOnInit(): void {
    this.selectedImage = this.image[this.counter]
  }

  onClick(): void {
    if(this.counter + 1 === this.image.length) {
      this.counter = 0
    } else {
      this.counter++
    }
    
    this.selectedImage = this.image[this.counter]

  }
}
