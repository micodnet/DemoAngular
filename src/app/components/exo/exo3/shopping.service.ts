import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  listCart : any[] = []

  constructor(){
    let fakeArt1 = { name : "Pommes", qty : 1, dateAjout : Date() }
    let fakeArt2 = { name : "Poires", qty : 2, dateAjout : Date() }

    this.listCart.push(fakeArt1, fakeArt2)
  }


  addToCart(newArtName: string, newArtQty: number)
  {
    let name = newArtName.trim().toLowerCase()
    name = name.charAt(0).toUpperCase() + name.slice(1)
    let qty = newArtQty
    let dateAjout = new Date()

    let added = {
      name, qty, dateAjout
    }

    let okAjout = true

    this.listCart.forEach((item) => {

      if(item.name == name && item.qty <= 5)
      {
        okAjout = false

        let totalQty = item.qty + qty
        if(totalQty > 5) totalQty = 5

        item.qty = totalQty
        item.dateAjout = new Date()
      }
    })


    if(okAjout) this.listCart.push(added)

  }

  delArticle(nameToDelete : string)
  {
    this.listCart = this.listCart.filter(item => item.name != nameToDelete)
  }

}
