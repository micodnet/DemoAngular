import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-cible',
  templateUrl: './cible.component.html',
  styleUrls: ['./cible.component.scss']
})
export class CibleComponent {
  personne! : any
  constructor(
    private ar : ActivatedRoute,
    private service : PersonneService
    ){}

  ngOnInit(){
    let nomDeLaRoute = this.ar.snapshot.params["nom"]
   this.personne =
      this.service.listPerson.find(p => p.nom == nomDeLaRoute)
      //find =>
      // pour chaque personne "p", vérifie que son nom "p.nom"
      // est égal au nom transmis par l'url "nomDeLaRoute"
    }
}
