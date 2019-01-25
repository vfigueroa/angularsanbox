import { Component } from '@angular/core';

@Component({ //pass javascript object
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10
    serverStatus="";

    constructor() { 
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }

    getServerStatus() {
        return this.serverStatus;
    }
}