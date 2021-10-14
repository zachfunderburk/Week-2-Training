//Assignment 3: In the custom directive, modify the font style

import { style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextDire]'
})
export class TextDireDirective {
  //constructor() { }

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.color = 'white';
    eleRef.nativeElement.style.background = 'blue';
    eleRef.nativeElement.style.fontSize = 'xx-Large';
  }  
}