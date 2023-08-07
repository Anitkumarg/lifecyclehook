import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element : ElementRef , private renderer : Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement , 'backgroundColor', 'red');
    this.renderer.addClass(this.element.nativeElement , 'customClass');
    this.renderer.setAttribute(this.element.nativeElement , 'title' , 'This is example div');
  }

}
