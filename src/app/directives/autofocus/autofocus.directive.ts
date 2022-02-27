import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[autofocus]' })
export class AutofocusDirective implements AfterViewChecked {

    private firstTime = true;

    constructor(
        private readonly elementRef: ElementRef,
    ) { }

    ngAfterViewChecked(): void {
        if (this.firstTime) {
            setTimeout(() => {
                (this.elementRef?.nativeElement as HTMLInputElement)?.focus();
                this.firstTime = false;
            }, 300);
        }
    }
}
