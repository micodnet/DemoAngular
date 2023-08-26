import { Component } from '@angular/core';

type aliment = Array<{ id: number; name: string; quantite: number }>;
type panier = Array<{ id: number; name: string; quantite: number }>;

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
  listeFruits : string[] = ["Pomme", "Poire", "Citron", "Banane", "Fraise"]

  listeClients : any[] = [
    { id : 1, name : "Loic", ordered : true},
    { id : 2, name : "Louis", ordered : false},
    { id : 3, name : "Jen", ordered : true},
    { id : 4, name : "Fred", ordered : false}
  ]

  isShowTexte1 : boolean = false
  isShowTexte2 : boolean = false


  triggerTexte1()
  {
    this.isShowTexte1 = !this.isShowTexte1
  }

  triggerTexte2()
  {
    this.isShowTexte2 = !this.isShowTexte2
  }
  aliments: aliment = [
    { id: 1, name: "fruits", quantite: 10  },
    { id: 2, name:"pains", quantite: 10 },
    { id: 3, name: "boissons", quantite: 10 },
    { id: 4, name: "cigarettes", quantite: 10}
  ];
  paniers: panier = [
    
    
  ];
  constructor(){}
  ngOnInit(){
    console.log(this.aliments)
    console.log(this.paniers)
  }
}


