import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
export interface IntervalType {
  type: string;
  value: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() intervalNumArray: IntervalType[];
  @Output() eNum = new EventEmitter<Number>();
  @Output() oNum = new EventEmitter<Number>();
  title = 'basicsassignment4v2';
  evenArr = [];
  oddArr = [];

  separateObj(intervalData: {type: string, value: number}) {
    if (intervalData.type === 'even') {
        this.evenArr.push(intervalData.value);
        this.eNum.emit(intervalData.value);
    } else {
      this.oddArr.push(intervalData.value);
      this.oNum.emit(intervalData.value);
    }
  }
}
