import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostlikedvideo]'
})
export class MostlikedvideoDirective {

  constructor(private element: ElementRef , private renderer : Renderer2) { }

  @Input() set appMostlikedvideo(condition : boolean) {
    if(condition) {
      this.renderer.addClass(this.element.nativeElement , 'highlight');
    }
  }

}
