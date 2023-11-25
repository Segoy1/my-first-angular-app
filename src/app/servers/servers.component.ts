import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl:'servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2']

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000);
  }
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
