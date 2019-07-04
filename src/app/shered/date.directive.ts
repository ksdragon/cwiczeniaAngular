import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input() private date: string;

  private paragraf;//<p>
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraf = this.renderer.createElement('p');
   }

  @HostListener('mouseenter')
  mouseenter(eventData: Event){
    console.log(this.date);
    this.paragraf.innerHTML= this.date;
    this.renderer.appendChild(this.el.nativeElement, this.paragraf);
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event){
    console.log(this.date);
    this.renderer.removeChild(this.el.nativeElement, this.paragraf);
  }
}
