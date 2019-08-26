import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banhang-app';
  height: number = document.documentElement.clientHeight;
  // nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    docked: false
  };

  constructor() {}

  onDockedChange = event => {
    // console.log('dockedChanged', event);
    this.state.docked = !this.state.docked;
  }
}