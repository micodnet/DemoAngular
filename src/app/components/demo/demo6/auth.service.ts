import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnect : boolean = false

  constructor() { }

  connect(){
    this.isConnect = true
    return this.isConnect
  }

  deconnect(){
    this.isConnect = false
    return this.isConnect
  }
}
