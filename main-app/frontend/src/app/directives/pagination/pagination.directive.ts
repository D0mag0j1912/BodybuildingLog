import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: 'bl-pagination' })
export class PaginationDirective {
    constructor(readonly elementRef: ElementRef<HTMLElement>, readonly renderer2: Renderer2) {
        this.renderer2.addClass(this.elementRef.nativeElement as HTMLElement, 'bl-pagination');
    }
}
