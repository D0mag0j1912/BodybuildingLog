import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: './datetime-picker.component.html',
    styleUrls: ['./datetime-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimePickerComponent {}
