import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { format } from 'date-fns';
import { takeUntil, tap } from 'rxjs/operators';
import { LocalStorageItems } from '../../../../models/common/interfaces/common.model';
import { Training } from '../../../../models/training/new-training/new-training.model';
import { PastTrainingsQueryParams } from '../../../../models/training/past-trainings/past-trainings.model';
import { TrainingItemActions } from '../../../../models/training/past-trainings/training-actions/training-actions.model';
import { SharedService } from '../../../../services/shared/shared.service';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';

@Component({
    selector: 'bl-training-item',
    templateUrl: './training-item.component.html',
    styleUrls: ['./training-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class TrainingItemComponent implements OnInit {

    readonly weekDays: string[] = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
    ];

    readonly actions: TrainingItemActions[] = [
        'delete',
        'more',
    ];

    timeCreated: string;
    dayIndex: number;

    @Input()
    training: Training;

    constructor(
        private readonly unsubscribeService: UnsubscribeService,
        private readonly sharedService: SharedService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        //TODO: vrijeme ovdje ide 2 sata unaprijed (uskladiti s lokalnom zonom) - Zasad samo oduzimam 2 sata
        this.timeCreated = format(
            this.sharedService.subtractTwoHours(new Date(this.training.createdAt))
            , 'HH:mm');
        this.dayIndex = this.sharedService.subtractTwoHours(new Date(this.training.createdAt)).getDay();
    }

    async trainingClicked(): Promise<void> {
        this.route.queryParams
            .pipe(
                tap(async (params: Params) => {
                    this.sharedService.pastTrainingsQueryParams$$.next(params as PastTrainingsQueryParams);
                    localStorage.setItem(LocalStorageItems.QUERY_PARAMS, JSON.stringify(params as PastTrainingsQueryParams));
                    await this.router.navigate(['/training/new-training', this.training._id]);
                }),
                takeUntil(this.unsubscribeService),
            )
            .subscribe();
    }

}
