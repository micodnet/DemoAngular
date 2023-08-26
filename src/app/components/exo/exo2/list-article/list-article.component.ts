import { Component, EventEmitter, Output  } from '@angular/core';
import { article } from './article';
@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent {
 

  @Output() addArticleEvent : EventEmitter<article> = new EventEmitter<article>()


  newArtName : string = ""
  newArtQty : number = 0


  addToCart(){
    let article : article = {
      name : this.newArtName,
      qty : this.newArtQty
    }
    this.addArticleEvent.emit(article)
  }
}
