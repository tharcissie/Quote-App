import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = "red";
    el.nativeElement.style.fontWeight = "bolder";
  }

}
