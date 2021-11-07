import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GeneralResponseData } from 'src/app/models/general-response.model';
import { NewTraining } from 'src/app/models/training/new-training/new-training.model';

export interface DeleteTrainingActionDialogData {
    title$: Observable<string>;
    dateCreated$: Observable<string>;
    timeCreated$: Observable<string>;
    training$: Observable<NewTraining>;
    deleteTrainingFn(trainingId: string): Observable<GeneralResponseData>;
}

@Component({
    templateUrl: './delete-training-action.component.html',
    styleUrls: ['./delete-training-action.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteTrainingActionComponent {

    isLoading: boolean = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: DeleteTrainingActionDialogData,
        private readonly dialogRef: MatDialogRef<DeleteTrainingActionComponent>,
        private readonly translateService: TranslateService,
        private readonly snackBar: MatSnackBar,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ){}

    deleteTraining(trainingId: string): void {
        this.data.deleteTrainingFn(trainingId as string).pipe(
            finalize(() => {
                this.dialogRef.close();
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            })
        ).subscribe((response: GeneralResponseData) => {
            this.snackBar.open(this.translateService.instant(response.message as string), null, {
                duration: 3000,
                panelClass: 'app__snackbar'
            });
        });
    }
}
