import { Component } from '@angular/core';

@Component({
    selector:  'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline';
    serverColor = '';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus ;
    }
    getColor() {
        return this.serverColor = this.serverStatus === 'online' ? 'green' : 'red';
    }

}
