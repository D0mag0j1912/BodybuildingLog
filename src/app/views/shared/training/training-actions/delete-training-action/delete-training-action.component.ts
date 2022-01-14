import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Training } from 'src/app/models/training/new-training/new-training.model';
import { SNACK_BAR_DURATION } from '../../../../../constants/snack-bar-duration.const';
import { TrainingData } from '../../../../../models/common/interfaces/common.model';
import { PastTrainingsResponse } from '../../../../../models/training/past-trainings/past-trainings.model';
import { SharedService } from '../../../../../services/shared/shared.service';

export interface DeleteTrainingActionDialogData {
    readonly title$: Observable<string>;
    readonly dateCreated$: Observable<string>;
    readonly timeCreated$: Observable<string>;
    readonly training$: Observable<Training>;
    deleteTrainingFn(
        trainingId: string,
        currentDate: Date,
    ): Observable<TrainingData<PastTrainingsResponse>>;
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
    ) {}

    deleteTraining(trainingId: string): void {
        this.isLoading = true;
        this.data.deleteTrainingFn(
            trainingId as string,
            new Date(`
                ${this.getSplittedCurrentDate()[2]}-
                ${this.getSplittedCurrentDate()[1]}-
                ${this.getSplittedCurrentDate()[0]}
            `) as Date,
        ).pipe(
            catchError(_ => EMPTY),
            finalize(() => {
                this.isLoading = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe((trainingData: TrainingData<PastTrainingsResponse>) => {
            this.sharedService.deletedTraining$$.next(trainingData);
            this.snackBar.open(this.translateService.instant(trainingData?.Value?.Message), null, {
                duration: SNACK_BAR_DURATION.GENERAL,
                panelClass: 'app__snackbar',
            });
            this.dialogRef.close();
        });
    }

    private getSplittedCurrentDate(): string[] {
        return (this.route.snapshot.queryParams.startDate as string)?.split('-');
    }
}
