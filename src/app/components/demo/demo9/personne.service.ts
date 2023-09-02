import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  listPerson : any[] = [
    {nom : 'Arthur', fonction : 'Roi de bretagne'},
    {nom : 'Perceval', fonction : 'Chevalier légendaire'},
    {nom : 'Leodagan', fonction : 'Roi de carmélide'},
    {nom : 'Merlin', fonction : 'Grand vainqueur de la belette de Winchester'}
  ]
  constructor() { }
}
