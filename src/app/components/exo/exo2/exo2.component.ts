import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from './article';


@Component({
  selector: 'app-Exo2',
  templateUrl: './Exo2.component.html',
  styleUrls: ['./Exo2.component.scss']
})
export class Exo2Component {


  @Output() addArticleEvent : EventEmitter<Article> = new EventEmitter<Article>()


  newArtName : string = ""
  newArtQty : number = 0


  addToCart(){
    let article : Article = {
      name : this.newArtName,
      qty : this.newArtQty
    }
    this.addArticleEvent.emit(article)
  }
}
