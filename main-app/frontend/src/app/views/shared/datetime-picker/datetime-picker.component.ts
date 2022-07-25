import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { IonDatetime, ModalController } from '@ionic/angular';
import { format, subMonths } from 'date-fns';
import { DialogRoles } from '../../../constants/enums/model-roles.enum';

@Component({
    templateUrl: './datetime-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimePickerComponent {

    maxDate = format(new Date(), 'yyyy-MM-dd');
    minDate = format(subMonths(new Date(), 2), 'yyyy-MM-dd');

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
        await this.modalController.dismiss(undefined, DialogRoles.CANCEL);
    }

    async select(): Promise<void> {
        await this.dateTimeEl?.confirm();
        await this.modalController.dismiss(this.dateValue, DialogRoles.SELECT_DATE);
    }
}
