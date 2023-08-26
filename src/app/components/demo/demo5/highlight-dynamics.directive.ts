import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDynamics]'
})
export class HighlightDynamicsDirective {

  constructor(private el : ElementRef) { }


  @HostListener("mouseenter")
  onMouseEnter(){
    this.el.nativeElement.style.fontSize="1.5rem"
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.el.nativeElement.style.fontSize="1rem"
  }
}
