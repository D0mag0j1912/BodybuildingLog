import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DialogRoles } from '../../../constants/enums/model-roles.enum';

export interface DialogData {
    isError: boolean;
    deleteExercise: DeleteExerciseDialogData;
}

export interface DeleteExerciseDialogData {
    message$: Observable<string>;
    exerciseName: string;
}

@Component({
    templateUrl: './delete-exercise-dialog.component.html',
    styleUrls: ['./delete-exercise-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteExerciseDialogComponent {
    @Input()
    isError = false;

    @Input()
    deleteExercise: DeleteExerciseDialogData;

    constructor(private readonly modalController: ModalController) {}

    async onCancel(): Promise<void> {
        await this.modalController.dismiss(false, DialogRoles.CANCEL);
    }

    async onDeleteExercise(): Promise<void> {
        await this.modalController.dismiss(true, DialogRoles.DELETE_EXERCISE);
    }
}
