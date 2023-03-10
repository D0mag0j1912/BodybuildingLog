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

    selectedItems: any[] = [];
    filteredItems: any[] = [];

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
        this.selectedItems = selectedItems;
        this.filteredItems = this.data;
    }

    registerOnChange(fn: (obj: any[]) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    open(): void {
        this.isOpen = true;
        this.filteredItems = this.filteredItems.map((value) => {
            const itemFound = this.selectedItems.find(
                (selectedValue) => selectedValue[this.hiddenValue] === value[this.hiddenValue],
            );
            if (!itemFound) {
                const { selected, ...rest } = value;
                return rest;
            }
            return {
                ...value,
                selected: true,
            };
        });
    }

    cancel(): void {
        this.isOpen = false;
    }

    select(): void {
        this.selectedItems = this.data.filter((item) => item.selected);
        this._modifySelectedOutput();
        this.isOpen = false;
    }

    filter(event: SearchbarCustomEvent): void {
        const filter = event.detail.value.toLowerCase();
        this.filteredItems = this.data.filter(
            (item) =>
                this._translateService
                    .instant(item[this.visibleValue])
                    .toLowerCase()
                    .indexOf(filter) >= 0,
        );
    }

    itemSelected(): void {
        if (!this.multiple) {
            if (this.selectedItems.length) {
                this.selectedItems[0].selected = false;
            }
            this.selectedItems = this.data.filter((item) => item.selected);
            this._modifySelectedOutput();
            this.isOpen = false;
        }
    }

    private _modifySelectedOutput(): void {
        const selectedOutput = this.selectedItems.map(({ selected, ...rest }) => rest);
        this.onChange(selectedOutput);
    }
}
