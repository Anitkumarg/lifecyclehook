import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck,
   AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() value : string = 'Anit';
  @ContentChild('paragraph') paragraphEl!: ElementRef;

  constructor() { 
    console.log('constructed called !!')
    console.log(this.value);
  }

  ngOnInit(): void {
    console.log('ngOnInit called !!')
    console.log(this.value)
  }

  ngOnChanges(change : SimpleChanges) {
    console.log('ngOnChanges called !!')
    console.log(change)
  }

  ngDoCheck() {
    console.log('ngDoCheck called !!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called !!')
    this.paragraphEl.nativeElement.textContent = 'This is new projected content'
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called !!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called !!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called !!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called !!');
  }

}
