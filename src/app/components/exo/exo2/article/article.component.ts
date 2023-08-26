import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() dateAjout : Date = new Date()
  @Input() name : string = ""
  @Input() qty : number = 0

  @Output() delArticleEvent : EventEmitter<string> = new EventEmitter<string>()


  delArticle(){
    this.delArticleEvent.emit(this.name)
  }

}
