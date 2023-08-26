import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component {
  newArtName : string = 'pommes'
  newArtQty : number = 4
  listCart : any[] = []

  constructor(){
    let fakeArt1 = { name : "Pommes", qty : 1, dateAjout : Date() }
    let fakeArt2 = { name : "Poires", qty : 2, dateAjout : Date() }

    this.listCart.push(fakeArt1, fakeArt2)
  }

  addToCart()
  {
    let name = this.newArtName.trim().toLowerCase()
    name = name.charAt(0).toUpperCase() + name.slice(1)
    let qty = this.newArtQty
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


    //same en version longue
    // this.listCart = this.listCart.filter((item) => {
    //   if(item.name != nameToDelete) return item
    //   else return false
    // })
  }
}
