import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SearchbarCustomEvent } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'bl-select',
    templateUrl: './searchable-select.component.html',
    styleUrls: ['./searchable-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SearchableSelectComponent),
            multi: true,
        },
    ],
})
export class SearchableSelectComponent implements ControlValueAccessor {
    isOpen = false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selected: any[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filtered: any[] = [];

    onChange: () => void;
    onTouched: () => void;

    @Input()
    title: string;

    @Input()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set data(data: any[]) {
        this._data = data;
        this.filtered = data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get data(): any[] {
        return this._data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private _data: any[];

    @Input()
    multiple = false;

    @Input()
    itemTextField = '';

    @Input()
    visibleValue: string;

    constructor(private _translateService: TranslateService) {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    writeValue(selectedItems: any[]): void {
        this.selected = selectedItems;
    }

    registerOnChange(fn: () => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    open(): void {
        this.isOpen = true;
    }

    cancel(): void {
        this.isOpen = false;
    }

    select(): void {
        this.selected = this.data.filter((item) => item.selected);
        //this.selectedChanged.emit(this.selected);
        this.isOpen = false;
    }

    filter(event: SearchbarCustomEvent): void {
        const filter = event.detail.value.toLowerCase();
        this.filtered = this.data.filter(
            (item) =>
                this._translateService
                    .instant(item[this.visibleValue])
                    .toLowerCase()
                    .indexOf(filter) >= 0,
        );
    }

    itemSelected(): void {
        if (!this.multiple) {
            if (this.selected.length) {
                this.selected[0].selected = false;
            }
            this.selected = this.data.filter((item) => item.selected);
            //this.selectedChanged.emit(this.selected);
            this.isOpen = false;
        }
    }
}
