import { Injectable } from '@angular/core';
import { IntervalModel } from './intervalValue.model';

@Injectable({
  providedIn: 'root'
})
export class IntervalmodelService {
numbers: IntervalModel[];
  constructor() {
    this.numbers  = [
      new IntervalModel('even', 0)
    ];
   }
}
