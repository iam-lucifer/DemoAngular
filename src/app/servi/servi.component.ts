import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servi',
  templateUrl: './servi.component.html',
  styleUrls: ['./servi.component.css']
})
export class ServiComponent implements OnInit {
  ServerAlert= "Button is Disable";
  ServerTxt= 'Server Status...';

  constructor() {
    setTimeout( () => {
      this.ServerAlert="Button is Enable";
    },2000)
  }

  // ServerAlerttxt(){
  //   this.="Server Is Running Perfectly";
  // }

  ngOnInit(): void {
  }


  onServerTxt(){
    this.ServerTxt='Server is Running ';
  }





}
