import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector: '[app-server]' by attribute
  //selector: '.app-servers'by class
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [ `
  h3 {
    color: blue
  }
  `]
})
export class AppComponent {
  title = 'Dreams';
}
