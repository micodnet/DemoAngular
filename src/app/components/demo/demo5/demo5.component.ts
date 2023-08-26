import { Component } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component {

  listCLient : any[] = []
  isDark : boolean = false
  darkColor : string = "white"

  constructor(){
    this.listCLient = [
      { id : 1, name : "Julien", inOrdered : 1},
      { id : 2, name : "Shara", inOrdered : 2},
      { id : 3, name : "Jennifer", inOrdered : 3},
      { id : 4, name : "Fred", inOrdered : 1},
      { id : 5, name : "Mika", inOrdered : 2},
    ]
  }


  getColorPayement(client : any)
  {
    //le return du ngClass permet le retour d'un élément ou d'un array d'élement
    switch (client.inOrdered)
    {
      case 1 :
        return ["okOrdered", "p5"]
      case 2 : 
        return ["lateOrdered", "p5"]
      case 3 :
        return ["badOrdered", "p5"]
      default : 
        return ["undefinedOrdered", "p5"]
    }
  }


  //  isDark : boolean = false
  //darkColor : string = "white"
  darkMode(){

    if(this.isDark){
      this.darkColor = "black"
    }
    else{
      this.darkColor = "white"
    }

    this.isDark = !this.isDark

  }

}
