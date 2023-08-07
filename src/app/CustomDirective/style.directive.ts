import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element : ElementRef , private renderer : Renderer2) { }

  @Input() set appStyle(styles : Object) {
    let enteries = Object.entries(styles);
    // console.log(enteries);
    for(let entry of enteries) {
      this.renderer.setStyle(this.element.nativeElement , entry[0] , entry[1])
    }
  }

}
