import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Training } from 'src/app/models/training/new-training/new-training.model';
import { MESSAGE_DURATION } from '../../../../../constants/message-duration.const';
import { StreamData } from '../../../../../models/common/interfaces/common.model';
import { Paginator } from '../../../../../models/common/interfaces/paginator.model';
import { DialogRoles } from '../../../../../models/common/types/modal-roles.type';
import { PastTrainings } from '../../../../../models/training/past-trainings/past-trainings.model';
import { SharedService } from '../../../../../services/shared/shared.service';
import { ToastControllerService } from '../../../../../services/shared/toast-controller.service';

export interface DeleteTrainingActionDialogData {
    readonly title$: Observable<string>;
    readonly dateCreated$: Observable<string>;
    readonly timeCreated$: Observable<string>;
    readonly training$: Observable<Training>;
    deleteTrainingFn(
        trainingId: string,
        currentDate: Date,
    ): Observable<StreamData<Paginator<PastTrainings>>>;
}

@Component({
    templateUrl: './delete-training-action.component.html',
    styleUrls: ['./delete-training-action.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteTrainingActionComponent {

    @Input()
    title$: Observable<string> = of('');

    @Input()
    dateCreated$: Observable<string> = of('');

    @Input()
    timeCreated$: Observable<string> = of('');

    @Input()
    training$: Observable<Training>;

    isLoading = false;

    constructor(
        private readonly dialogRef: MatDialogRef<DeleteTrainingActionComponent>,
        private readonly translateService: TranslateService,
        private readonly sharedService: SharedService,
        private readonly toastControllerService: ToastControllerService,
        private readonly modalController: ModalController,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly route: ActivatedRoute,
    ) { }

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
        ).subscribe(async (response: StreamData<Paginator<PastTrainings>>) => {
            this.sharedService.deletedTraining$$.next(response);
            await this.toastControllerService.displayToast({
                message: this.translateService.instant(response?.Value?.Results?.Message ?? ''),
                duration: MESSAGE_DURATION.GENERAL,
                color: 'primary',
            });
            this.dialogRef.close();
        });
    }

    async onCancel(): Promise<void> {
        await this.modalController.dismiss(false, DialogRoles.CANCEL);
    }

    private getSplittedCurrentDate(): string[] {
        return (this.route.snapshot.queryParams.startDate as string)?.split('-');
    }
}
