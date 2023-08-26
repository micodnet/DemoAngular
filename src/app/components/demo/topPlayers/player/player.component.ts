import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  //vient du parent ! mais est utilisable comme une var classique
  @Input() name : string = ""
  @Input() inOrdered : number = 0
  @Input() id : number = 0


  @Output() upgradeEvent : EventEmitter<number> = new EventEmitter<number>()
  @Output() downgradeEvent : EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }


  upgrade(){
    this.upgradeEvent.emit(this.id)
  }

  downgrade(){
    this.downgradeEvent.emit(this.id)
  }
}
