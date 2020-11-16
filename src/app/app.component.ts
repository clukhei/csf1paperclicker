import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf1paperclick';
  image: String[] = ['dist/csf1paperclicker/assets/img/boat.jpg', 'dist/csf1paperclicker/assets/img/book.jpg', 'dist/csf1paperclicker/assets/img/cabbage-paper.jpg', 'dist/csf1paperclicker/assets/img/pile.jpg']
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
