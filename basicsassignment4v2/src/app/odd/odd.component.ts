import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  outNumber: number;
  constructor() { }
  @Input() value: number;
  ngOnInit() {
    this.outNumber = this.value;
  }

}
