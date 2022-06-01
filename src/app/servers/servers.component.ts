import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  AllowNewServer= false;
  ServerCreateStatus= 'No Server Was Crated!';
  ServerName='TestServer'

  constructor() {
    setTimeout(() => {
      this.AllowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.ServerCreateStatus='Server is Created Successfully! Server Name Is ' + this.ServerName;
  }

  onUpdateServerName( event:Event){
  this.ServerName= (<HTMLInputElement>event.target).value;
  }

}
