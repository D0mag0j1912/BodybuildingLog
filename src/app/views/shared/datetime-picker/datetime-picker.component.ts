import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
    templateUrl: './datetime-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimePickerComponent {

    @ViewChild('datetime', { read: IonDatetime })
    dateTimeEl: IonDatetime;


    close(): void {
        this.dateTimeEl?.cancel(true);
    }

    select(): void {
        this.dateTimeEl?.confirm(true);
    }
}
