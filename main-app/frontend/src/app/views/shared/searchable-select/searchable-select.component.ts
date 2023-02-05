import { Component, Input } from '@angular/core';

@Component({
    selector: 'bl-select',
    templateUrl: './searchable-select.component.html',
    styleUrls: ['./searchable-select.component.scss'],
})
export class SearchableSelectComponent {
    isOpen = false;

    @Input()
    title: string;

    @Input()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];

    @Input()
    multiple = false;

    @Input()
    itemTextField = '';

    open(): void {
        this.isOpen = true;
    }

    cancel(): void {
        this.isOpen = false;
    }

    select(): void {
        this.isOpen = false;
    }
}
