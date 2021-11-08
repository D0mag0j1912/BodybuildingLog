import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NewTraining } from 'src/app/models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../../../../models/training/past-trainings/past-trainings-response.model';
import { SharedService } from '../../../../services/shared/shared.service';

export interface DeleteTrainingActionDialogData {
    title$: Observable<string>;
    dateCreated$: Observable<string>;
    timeCreated$: Observable<string>;
    training$: Observable<NewTraining>;
    deleteTrainingFn(
        trainingId: string,
        currentDate: Date,
    ): Observable<PastTrainingsResponse>;
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
        private readonly sharedService: SharedService,
        private readonly snackBar: MatSnackBar,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly route: ActivatedRoute,
    ){}

    deleteTraining(trainingId: string): void {
        this.data.deleteTrainingFn(
            trainingId as string,
            new Date(`
                ${this.getSplittedCurrentDate()[2]}-
                ${this.getSplittedCurrentDate()[1]}-
                ${this.getSplittedCurrentDate()[0]}
            `) as Date,
        ).pipe(
            finalize(() => {
                this.dialogRef.close();
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe((response: PastTrainingsResponse) => {
            this.sharedService.pastTrainingsData$$.next(response as PastTrainingsResponse);
            this.snackBar.open(this.translateService.instant(response.message as string), null, {
                duration: 3000,
                panelClass: 'app__snackbar',
            });
        });
    }

    private getSplittedCurrentDate(): string[] {
        return (this.route.snapshot.queryParams.startDate as string).split('-');
    }
}
