import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { IonDatetime, ModalController } from '@ionic/angular';
import { format } from 'date-fns';
import { DialogRoles } from '../../../models/common/types/modal-roles.type';

@Component({
    templateUrl: './datetime-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimePickerComponent {

    maxDate: string = format(new Date(), 'yyyy-MM-dd');

    @Input()
    dateValue: string;

    @ViewChild('datetime', { read: IonDatetime })
    dateTimeEl: IonDatetime;

    constructor(
        private readonly modalController: ModalController,
    ) { }

    dateChanged(currentDateValue: string): void {
        this.dateValue = currentDateValue;
    }

    async close(): Promise<void> {
        await this.dateTimeEl?.cancel();
        await this.modalController.dismiss(null, DialogRoles.CANCEL);
    }

    async select(): Promise<void> {
        await this.dateTimeEl?.confirm();
        await this.modalController.dismiss(this.dateValue, DialogRoles.SELECT_DATE);
    }
}
