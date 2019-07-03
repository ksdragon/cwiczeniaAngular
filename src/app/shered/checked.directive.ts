import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
      let li = this.el.nativeElement;
      this.renderer.setStyle(li, 'list-style-image', 'url(/assets/checked.png)');
      this.renderer.setStyle(li, 'background', 'aquamarine');
   }

}
