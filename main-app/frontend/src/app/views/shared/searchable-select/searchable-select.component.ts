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

    constructor(private _translateService: TranslateService) {}

    writeValue(input: any): void {
        if (Array.isArray(input)) {
            this.selectedItems = input;
        } else {
            this.selectedItems = [
                this.data.find((value) => value[this.hiddenValue] === input),
            ].filter(Boolean);
        }
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
        this.filteredItems = this.data.map((item) => {
            const itemFound = this.selectedItems.find(
                (selectedValue) => selectedValue[this.hiddenValue] === item[this.hiddenValue],
            );
            if (!itemFound) {
                const { selected, ...rest } = item;
                return rest;
            }
            return {
                ...item,
                selected: true,
            };
        });
    }

    cancel(): void {
        this.isOpen = false;
        this._resetFilteredItems();
    }

    filter(event: SearchbarCustomEvent): void {
        const filter = event.detail.value.toLowerCase();
        this.data = this.data.map((item) => {
            const itemFound = this.selectedItems.find(
                (selectedValue) => selectedValue[this.hiddenValue] === item[this.hiddenValue],
            );
            if (!itemFound) {
                const { selected, ...rest } = item;
                return rest;
            }
            return {
                ...item,
                selected: true,
            };
        });
        this.filteredItems = this.data.filter(
            (item) =>
                this._translateService
                    .instant(item[this.visibleValue])
                    .toLowerCase()
                    .indexOf(filter) >= 0,
        );
    }

    itemSelected(item: any): void {
        if (!this.multiple) {
            if (this.selectedItems.length) {
                this.selectedItems[0].selected = false;
            }
            this.selectedItems = [item];
            this._emitOutputEvent();
        } else {
            if (item.selected) {
                this.selectedItems = [...this.selectedItems, item];
            } else {
                this.selectedItems = this.selectedItems.filter(
                    (selectedItem) => selectedItem[this.hiddenValue] !== item[this.hiddenValue],
                );
            }
        }
    }

    private _emitOutputEvent(): void {
        this._modifySelectedOutput();
        this._resetFilteredItems();
        this.isOpen = false;
    }

    private _modifySelectedOutput(): void {
        const selectedOutput = this.selectedItems.map(({ selected, ...rest }) => rest);
        this.onChange(selectedOutput);
    }

    private _resetFilteredItems(): void {
        this.filteredItems = this.filteredItems.map(({ selected, ...rest }) => rest);
    }
}
