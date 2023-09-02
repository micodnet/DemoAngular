import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  listCart : any[] = []

  constructor(private shoppingService : ShoppingService){
    this.listCart = this.shoppingService.listCart
  }

  delArticle(name: string){
    console.log(name)
    this.shoppingService.delArticle(name)
    this.listCart = this.shoppingService.listCart

  }
}
