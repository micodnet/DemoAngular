import { Component } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component {

  newArtName! : string
  newArtQty! : number

  constructor(private shoppingService : ShoppingService){}

  addToCart() {
    this.shoppingService.addToCart(this.newArtName, this.newArtQty)
  }
}
