import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles: [`
      .biggerfive {
          color: white;
      }
  `]
})
export class AppComponent {

  pVisible = false;
  count = [];
  i = 1;

  onClick(){
    this.pVisible = !this.pVisible;
    this.count.push(this.i);
    this.i++;
  }
}
