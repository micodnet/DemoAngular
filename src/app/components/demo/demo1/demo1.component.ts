import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  myProp!: string | number | boolean | Date | null//= ""  //ou on lui donne une valeur vide ou un point !devant public
  //par defaut propriete public //On peux donner plusieur type a une variable
 
 maListe : string[] = []
  nouveauJeu : Jeu = {
  nom : "Magic",
  duree : 40,
  nbJoueur : 2
 }
 
  constructor() {
    this.myProp = "Salut"
    //this.myProp = 4
  }
}

export interface Jeu {
  nom : string
  duree : number
  nbJoueur : number
}

export class Personne {
  nom! : string
  constructor(nom : string){
    this.nom = nom
  }
}