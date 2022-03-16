import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

export interface DialogData {
    isError: boolean;
    message?: string;
    deleteExercise?: DeleteExerciseDialogData;
}

export interface DeleteExerciseDialogData {
    message$: Observable<string>;
    exerciseName: string;
}

export enum DialogRoles {
    CANCEL = 'CANCEL',
    DELETE_EXERCISE = 'DELETE_EXERCISE',
}
@Component({
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {

    @Input()
    isError = false;

    @Input()
    deleteExercise: DeleteExerciseDialogData;

    @Input()
    message$: Observable<string>;

    constructor(
        private readonly modalController: ModalController,
    ) {}

    async onCancel(): Promise<void> {
        await this.modalController.dismiss(false, DialogRoles.CANCEL);
    }

    async onDeleteExercise(): Promise<void> {
        await this.modalController.dismiss(true, DialogRoles.DELETE_EXERCISE);
    }

}
