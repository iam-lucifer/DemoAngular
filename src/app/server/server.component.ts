import {Component} from "@angular/core";

@Component({
  selector:'app-server',
  templateUrl:  './server.component.html'
})
export class ServerComponent {
  ServerId = 10 ;
  ServerState ='Online';
  getServerState(){
    return this.ServerState;
  }

}
