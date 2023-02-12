/* eslint-disable @typescript-eslint/no-explicit-any */
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

    selected: any[] = [];

    filtered: any[] = [];

    onChange: (obj: any[]) => void;
    onTouched: () => void;

    @Input()
    title: string;

    @Input()
    set data(data: any[]) {
        this._data = data;
    }
    get data(): any[] {
        return this._data;
    }
    private _data: any[];

    @Input()
    multiple = false;

    @Input()
    itemTextField = '';

    @Input()
    visibleValue: string;

    constructor(private _translateService: TranslateService) {}

    writeValue(selectedItems: any[]): void {
        this.selected = selectedItems;
        this.filtered = this.data.map((item) => {
            const foundItem = this.selected.find((selectedItem) => selectedItem._id === item._id);
            if (foundItem) {
                item.selected = true;
            }
            return item;
        });
    }

    registerOnChange(fn: (obj: any[]) => void): void {
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
        this.onChange(this.selected);
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
            this.onChange(this.selected);
            this.isOpen = false;
        }
    }
}
