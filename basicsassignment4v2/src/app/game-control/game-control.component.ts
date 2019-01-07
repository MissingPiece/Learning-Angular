import { Component, OnInit, Output } from '@angular/core';
import { IntervalNumber } from 'src/shared/IntervalNumber.model';
import { EventEmitter } from '@angular/core';



export interface IntervalType {
  type: string;
  value: number;
}
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // IntervalNumberArray: IntervalNumber[] = [
  //   new IntervalNumber('fuck', 0)
  // ];
  intervalNumArray: Array <IntervalType> = [
    // {type: 'ass', value: 0},
    // {type: 'ass', value: 0}
  ];

  timer;
  intervalNumber = 0;
  stringT: string;
  intervalObj: IntervalType;
  constructor() {
   }

  @Output() intervalData = new EventEmitter<IntervalType>();
  ngOnInit() {
  }

  onStartClick(): void {

    this.timer = setInterval(() => {
      console.log('this.intervalNumber = ' + this.intervalNumber);
      this.intervalNumber += 1;
      this.stringT = this.typeDecider();
      this.intervalObj = {type: this.stringT, value: this.intervalNumber};
      console.log(this.intervalObj);
      this.intervalData.emit(this.intervalObj);
    }, 1000);
  }

  typeDecider(): string {
    if ( this.intervalNumber % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }

  onStopClick() {
    clearInterval(this.timer);
  }
}

