import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '`<app-server></app-server><app-server></app-server>`',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server has been created!';
  serverName = 'TestServer';

  constructor() {
    //function() {}
    setTimeout ( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    if (this.serverName !== '') {
      this.serverCreationStatus = 'Server ' + this.serverName + ' has been created';
    } else {
        this.serverCreationStatus = '';
    }
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
