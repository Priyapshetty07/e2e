import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThbsBackground]'
})
export class ThbsBackgroundDirective {

  @HostListener('mouseenter')onMouseEnter() {

    this.myelement.nativeElement.style.fontSize = '30px';

  }

  
  @HostListener('mouseleave')onMouseLeave() {

    this.myelement.nativeElement.style.fontSize = '10px';

  }

  @HostListener('dblclick')onMouseDoubleClick() {

    this.myelement.nativeElement.style.color = 'green';

  }

  @HostListener('click')onMouseClick() {

    this.myelement.nativeElement.style.color = 'red';

  }


  constructor(private myelement:ElementRef) { 

    this.myelement.nativeElement.style.backgroundColor="yellow";
    this.myelement.nativeElement.innerHTML="priya p shetty";
  }

  
}
