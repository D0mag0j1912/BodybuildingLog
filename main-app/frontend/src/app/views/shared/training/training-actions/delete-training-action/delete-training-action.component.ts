import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { NewTrainingDto as NewTraining } from '../../../../../../api/models/new-training-dto';
import { DialogRoles } from '../../../../../constants/enums/dialog-roles.enum';

export interface DeleteTrainingActionDialogData {
    title$: Observable<string>;
    dateCreated$: Observable<string>;
    timeCreated: string;
    training: NewTraining;
}

@Component({
    templateUrl: './delete-training-action.component.html',
    styleUrls: ['./delete-training-action.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteTrainingActionComponent {
    @Input()
    title$: Observable<string>;

    @Input()
    dateCreated$: Observable<string>;

    @Input()
    timeCreated = '';

    @Input()
    training: NewTraining;

    constructor(private _modalController: ModalController) {}

    async deleteTraining(): Promise<void> {
        await this._modalController.dismiss(this.training._id, DialogRoles.DELETE_TRAINING);
    }

    async onCancel(): Promise<void> {
        await this._modalController.dismiss(false, DialogRoles.CANCEL);
    }
}
