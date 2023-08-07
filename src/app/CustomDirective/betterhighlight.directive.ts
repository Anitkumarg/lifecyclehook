import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'pink';

  constructor(private element: ElementRef , private renderer : Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.highlightColor;
    this.border = '2px solid black';
  }

  @HostListener('mouseleave') onmouseout() {
    this.backgroundColor = this.defaultColor;
    this.border = 'none';
  }

}
