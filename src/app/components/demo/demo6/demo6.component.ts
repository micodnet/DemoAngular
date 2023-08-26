import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component {
  login: string = "Michael"
  password: string = "test1234"

  isConnect: boolean = false

  constructor(private authServe : AuthService){
    this.isConnect = this.authServe.isConnect
  }

  connect(){
    this.isConnect = this.authServe.connect()
  }

  deconnect(){
    this.isConnect = this.authServe.deconnect()
  }
}
