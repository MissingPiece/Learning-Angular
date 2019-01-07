import { Component, OnInit } from '@angular/core';
import { IntervalModel} from 'src/app/shared/intervalValue.model';
import { IntervalmodelService } from '../shared/intervalmodel.service';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private intervalNumber: number;
  timer;
  constructor(private numberService: IntervalmodelService) {
    this.intervalNumber = 0;
  }
  ngOnInit() {
  }

  onStartClick(){
    console.log('onStartClick');
    this.timer = setInterval(() => {
      console.log('Interval Number : ' + this.intervalNumber);
      this.intervalNumber += 1;
      this.numberService.numbers.push(
        this.createIntervalObject()
        // type: 'even',
        // value: this.intervalNumber
      );
    }, 1000);

  }

  createIntervalObject(): IntervalModel {
    const temp = new IntervalModel('', this.intervalNumber);
    if (this.intervalNumber % 2 === 0 ) {
      temp.type = 'even';

    } else {
      temp.type = 'odd';
    }
    return temp;
  }

  addToInterval(): void  {
    this.intervalNumber += 1;
    console.log('Interval Number : ' + this.intervalNumber);
  }

  onStopClick() {
    console.log('onStopClick');

     clearInterval(this.timer);
  }

}
