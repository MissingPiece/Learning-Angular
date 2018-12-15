import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

username = 'ss';

  constructor() { }

  ngOnInit() {
  }

  checkIfNull(username: any) {
    if ( this.username !== '') {
      return false;
    } else {
      return true;
    }
  }

  onResetUserNameClick() {
    this.username = '';
  }
}
