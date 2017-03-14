import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[toggleDiv]'
})

export class ToggleDivDirective {

  constructor(el: ElementRef) {

  	el.nativeElement.style.backgroundColor = 'yellow';
  	
  }

}
