import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { NewTraining } from 'src/app/models/training/new-training.model';

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
    ){}
}
