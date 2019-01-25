import { Component } from '@angular/core';

@Component({ //pass javascript object
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    domainName: string = "Figuerroa.com";
    serverId: number = 10
    serverStatus: string = "offline"

    renderFullName () {
        return this.domainName;
    }
}