import { AfterViewInit, Directive, Input } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Directive({ selector: '[ionFocus]' })
export class AutofocusDirective implements AfterViewInit {
    @Input('duration')
    duration = 350;

    private firstTime = true;

    constructor(private readonly ionInput: IonInput) {}

    ngAfterViewInit(): void {
        if (this.firstTime) {
            setTimeout(() => {
                this.ionInput?.setFocus();
                this.firstTime = false;
            }, this.duration);
        }
    }
}
