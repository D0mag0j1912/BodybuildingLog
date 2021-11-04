import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { GeneralResponseData } from 'src/app/models/general-response.model';
import { NewTraining } from 'src/app/models/training/new-training.model';
import { DeleteTrainingActionService } from 'src/app/services/training/training-actions/delete-training-action.service';

export interface DeleteTrainingActionDialogData {
    title$: Observable<string>;
    createdAt$: Observable<string>;
    training$: Observable<NewTraining>;
}

@Component({
    templateUrl: './delete-training-action.component.html',
    styleUrls: ['./delete-training-action.component.scss'],
})
export class DeleteTrainingActionComponent {

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: DeleteTrainingActionDialogData,
        private readonly deleteTrainingActionService: DeleteTrainingActionService,
        private readonly translateService: TranslateService,
        private readonly snackBar: MatSnackBar,
    ){}

    deleteTraining(trainingId: string): void {
        this.deleteTrainingActionService.deleteTraining(trainingId as string).subscribe((response: GeneralResponseData) => {
            this.snackBar.open(this.translateService.instant(response.message as string), null, {
                duration: 3000
            });
        });
    }
}
