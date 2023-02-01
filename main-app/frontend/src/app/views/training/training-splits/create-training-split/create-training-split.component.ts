import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogRoles } from '../../../../constants/enums/dialog-roles.enum';

@Component({
    templateUrl: './create-training-split.component.html',
    styleUrls: ['./create-training-split.component.scss'],
})
export class CreateTrainingSplitComponent {
    readonly daysOfWeek$: Observable<string[]> = this._translateService
        .stream('weekdays')
        .pipe(map((value) => Object.values(value)));

    form = new FormGroup({
        Name: new FormControl('', Validators.required),
    });

    constructor(
        private _translateService: TranslateService,
        private _modalController: ModalController,
    ) {}

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }
}
