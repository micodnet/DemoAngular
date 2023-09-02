import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component {

  constructor(
    private router : Router
  ){}

  list : string[] = [
    "Arthur", "Perceval", "Merlin", "Leodagan"
  ]

  naviguer(nomATransmettre : string){
    this.router.navigate(["demo/cible", nomATransmettre])

  }
}
