import { ComponentType } from '@angular/cdk/portal';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { DeleteTrainingActionComponent, DeleteTrainingActionDialogData } from 'src/app/views/shared/training-actions/delete-training-action/delete-training-action.component';
import { TrainingItemActions } from '../training-item.component';

type ActionComponents = ComponentType<DeleteTrainingActionComponent>;

@Component({
    selector: 'app-training-item-actions',
    templateUrl: './training-item-actions.component.html',
    styleUrls: ['./training-item-actions.component.scss'],
})
export class TrainingItemActionsComponent {

    @Input()
    action: TrainingItemActions;

    constructor(
        private readonly matDialog: MatDialog,
        private readonly translateService: TranslateService,
    ){}

    performAction(action: TrainingItemActions): void {
        this.matDialog.open(this.getComponent(action), {
            data: {
                title$: this.getTitle(action),
            } as DeleteTrainingActionDialogData
        });
    }

    private getComponent(action: TrainingItemActions): ActionComponents {
        switch(action) {
            case 'delete':
                return DeleteTrainingActionComponent;
            default:
                return null;
        }
    }

    private getTitle(action: TrainingItemActions): Observable<string> {
        switch(action) {
            case 'delete':
                return this.translateService.stream('training.past_trainings.actions.delete_training');
            default:
                return this.translateService.stream('TODO');
        }
    }
}
