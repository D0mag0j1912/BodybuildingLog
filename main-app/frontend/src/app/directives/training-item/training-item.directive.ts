import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: 'bl-training-item' })
export class TrainingItemDirective {
    constructor(readonly elementRef: ElementRef<HTMLElement>, readonly renderer2: Renderer2) {
        renderer2.addClass(elementRef.nativeElement as HTMLElement, 'bl-training-item');
    }
}
