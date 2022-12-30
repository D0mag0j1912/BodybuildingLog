import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { NewTraining } from '../../../../../models/training/new-training/new-training.model';
import { StreamData } from '../../../../../models/common/common.model';
import { Paginator } from '../../../../../models/common/paginator.model';
import { DialogRoles } from '../../../../../constants/enums/dialog-roles.enum';
import { PastTrainings } from '../../../../../models/training/past-trainings/past-trainings.model';
import { SharedStoreService } from '../../../../../services/store/shared/shared-store.service';
import { DeleteTrainingActionService } from '../../../../../services/api/training/delete-training-action.service';
import { SearchDataDto } from '../../../../../models/common/paginator.model';
import { DEFAULT_SIZE, INITIAL_PAGE } from '../../../../../constants/shared/paginator.const';

export interface DeleteTrainingActionDialogData {
    title$: Observable<string>;
    dateCreated$: Observable<string>;
    timeCreated: string;
    training: NewTraining;
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
    timeCreated = '';

    @Input()
    training: NewTraining;

    isLoading = false;

    constructor(
        private readonly sharedStoreService: SharedStoreService,
        private readonly deleteTrainingActionService: DeleteTrainingActionService,
        private readonly modalController: ModalController,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly route: ActivatedRoute,
    ) {}

    deleteTraining(trainingId: string): void {
        this.isLoading = true;
        this.deleteTrainingActionService
            .deleteTraining(trainingId, this.getDeleteTrainingMeta())
            .pipe(
                catchError((_) => EMPTY),
                finalize(() => {
                    this.isLoading = false;
                    this.changeDetectorRef.markForCheck();
                }),
            )
            .subscribe(async (response: StreamData<Paginator<PastTrainings>>) => {
                this.sharedStoreService.deletedTraining$$.next(response);
                await this.modalController.dismiss(false, DialogRoles.DELETE_TRAINING);
            });
    }

    async onCancel(): Promise<void> {
        await this.modalController.dismiss(false, DialogRoles.CANCEL);
    }

    private getDeleteTrainingMeta(): {
        searchData: SearchDataDto | undefined;
        currentDate: Date | undefined;
    } {
        const isSearch = !!this.route.snapshot.queryParams?.search;
        if (isSearch) {
            const searchValue = (this.route.snapshot.queryParams?.search as string).trim();
            const page = +this.route.snapshot.queryParams?.page ?? INITIAL_PAGE;
            const size = +this.route.snapshot.queryParams?.size ?? DEFAULT_SIZE;
            return {
                searchData: {
                    page: page,
                    size: size,
                    searchValue: searchValue,
                } as SearchDataDto,
                currentDate: undefined,
            };
        } else {
            const splittedDate = (this.route.snapshot.queryParams.startDate as string)?.split('-');
            return {
                searchData: undefined,
                currentDate: new Date(`
                    ${splittedDate[2]}-
                    ${splittedDate[1]}-
                    ${splittedDate[0]}
                `),
            };
        }
    }
}
