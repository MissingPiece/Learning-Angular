import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IntervalModel } from '../shared/intervalValue.model';
import { TestBed } from '@angular/core/testing';
import { SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {
@Input() cNumbers: {type: string, value: number};
  constructor() { }

  ngOnInit() {
  }
test() {
  console.log( this.cNumbers.type);
}
ngOnChanges(changes: SimpleChanges): void {
  // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  // Add '${implements OnChanges}' to the class.
  this.test();
}
}
