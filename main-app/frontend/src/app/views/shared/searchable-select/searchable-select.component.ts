/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, forwardRef, Input, SimpleChanges } from '@angular/core';
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
    data: any[];

    @Input()
    multiple = false;

    @Input()
    itemTextField = '';

    @Input()
    visibleValue: string;

    @Input()
    hiddenValue: string;

    @Input()
    panelClass: string;

    constructor(private _translateService: TranslateService) {}

    writeValue(selectedItems: any[]): void {
        this.selected = selectedItems;
        this.filtered = this.data.map((item) => {
            const foundItem = this.selected.find(
                (selectedItem) => selectedItem[this.hiddenValue] === item[this.hiddenValue],
            );
            if (foundItem) {
                return {
                    ...item,
                    selected: true,
                };
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
        this.filtered = this.filtered.map((value: any) => {
            const itemFound = this.selected.find(
                (selectedValue: any) => selectedValue[this.hiddenValue] === value[this.hiddenValue],
            );
            if (!itemFound) {
                const { selected, ...rest } = value;
                return rest;
            }
            return value;
        });
    }

    cancel(): void {
        this.isOpen = false;
    }

    select(): void {
        this.selected = this.data.filter((item) => item.selected);
        this._modifySelectedOutput();
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
            this._modifySelectedOutput();
            this.isOpen = false;
        } else {
            this.data = [...this.filtered];
        }
    }

    private _modifySelectedOutput(): void {
        const selectedOutput = this.selected.map(({ selected, ...rest }) => rest);
        this.onChange(selectedOutput);
    }
}
