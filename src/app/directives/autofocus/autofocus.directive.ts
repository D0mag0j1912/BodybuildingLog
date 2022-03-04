import { AfterViewInit, Directive } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Directive({ selector: '[ionFocus]' })
export class AutofocusDirective implements AfterViewInit {

    private firstTime = true;

    constructor(
        private readonly ionInput: IonInput,
    ) { }

    ngAfterViewInit(): void {
        if (this.firstTime) {
            setTimeout(() => {
                this.ionInput?.setFocus();
                this.firstTime = false;
            }, 400);
        }
    }
}
