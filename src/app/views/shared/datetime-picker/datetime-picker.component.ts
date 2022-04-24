import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { IonDatetime, ModalController } from '@ionic/angular';
import { DialogRoles } from '../../../models/common/types/modal-roles.type';

@Component({
    templateUrl: './datetime-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimePickerComponent {

    @Input()
    dateValue: Date;

    @ViewChild('datetime', { read: IonDatetime })
    dateTimeEl: IonDatetime;

    constructor(
        private readonly modalController: ModalController,
    ) { }

    async close(): Promise<void> {
        await this.dateTimeEl?.cancel();
        await this.modalController.dismiss(null, DialogRoles.CANCEL);
    }

    async select(): Promise<void> {
        await this.dateTimeEl?.confirm();
        await this.modalController.dismiss(this.dateValue, DialogRoles.SELECT_DATE);
    }
}
