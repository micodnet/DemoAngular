import { Component } from '@angular/core';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.scss']
})
export class TopPlayersComponent {

  listClient : any[] = []

  constructor() {
    this.listClient = [
      { id : 1, name : "Julien", inOrdered : 1},
      { id : 2, name : "Shara", inOrdered : 2},
      { id : 3, name : "Jennifer", inOrdered : 3},
      { id : 4, name : "Fred", inOrdered : 1},
      { id : 5, name : "Mika", inOrdered : 2},
    ]
  }


  downgradeInParent(id : number){
    this.listClient = this.listClient.map((client) => {
      if(client.id == id)
        client.inOrdered--

      return client
    })

    console.log(this.listClient)
  }

  upgradeInParent(id : number){
    this.listClient = this.listClient.map((client) => {
      if(client.id == id)
        client.inOrdered++

      return client
    })

  }
}
