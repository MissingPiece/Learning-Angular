import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-button',
  templateUrl: './display-button.component.html',
  styleUrls: ['./display-button.component.css']
})
export class DisplayButtonComponent implements OnInit {

  showParagraph = true;
  clickHistory = [];
  count = 0;
  constructor() {
   }

  ngOnInit() {
  }
  onDisplayToggle() {
    this.showParagraph = !this.showParagraph;
    this.clickHistory.push(this.count + 1);
    this.count = this.count + 1;
  }
  isOverFive() {
    
  }
}
