import { ComponentType } from '@angular/cdk/portal';
import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewTraining } from 'src/app/models/training/new-training.model';
import {
    DeleteTrainingActionComponent,
    DeleteTrainingActionDialogData } from 'src/app/views/shared/training-actions/delete-training-action/delete-training-action.component';
import { MoreTrainingActionComponent } from '../../../../shared/training-actions/more-training-action/more-training-action.component';
import { TrainingItemActions } from '../training-item.component';

type ActionComponents = ComponentType<DeleteTrainingActionComponent | MoreTrainingActionComponent>;

@Component({
    selector: 'app-training-item-actions',
    templateUrl: './training-item-actions.component.html',
    styleUrls: ['./training-item-actions.component.scss'],
})
export class TrainingItemActionsComponent {

    @Input()
    action: TrainingItemActions;

    @Input()
    training: NewTraining;

    @Input()
    dayIndex: number;

    @Input()
    weekDays: ReadonlyArray<string>;

    constructor(
        private readonly matDialog: MatDialog,
        private readonly datePipe: DatePipe,
        private readonly translateService: TranslateService,
    ){}

    performAction(action: TrainingItemActions): void {
        this.matDialog.open(this.getComponent(action) as ComponentType<DeleteTrainingActionComponent>, {
            data: {
                title$: this.getTitle(action),
                createdAt$: this.translateService.stream(`weekdays.${this.weekDays[this.dayIndex]}`).pipe(
                    map((value: { [key: string]: string }) => `${value} (${this.datePipe.transform(this.training.createdAt, 'dd.MM.yyyy')})`)
                ),
                training$: of(this.training as NewTraining),
            } as DeleteTrainingActionDialogData,
            panelClass: this.getClass(action) as string
        });
    }

    private getClass(action: TrainingItemActions): string {
        switch(action) {
            case 'delete':
                return 'delete-training-dialog';
            default:
                return '';
        }
    }

    private getComponent(action: TrainingItemActions): ActionComponents {
        switch(action) {
            case 'delete':
                return DeleteTrainingActionComponent;
            default:
                return MoreTrainingActionComponent;
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
