import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { format } from 'date-fns';
import { take } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { StorageItems } from '../../../../constants/enums/storage-items.enum';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { PastTrainingsQueryParams } from '../../../../models/training/past-trainings/past-trainings.model';
import { TrainingItemActions } from '../../../../models/training/past-trainings/training-actions/training-actions.model';
import { SharedStoreService } from '../../../../services/store/shared/shared-store.service';

@Component({
    selector: 'bl-training-item',
    templateUrl: './training-item.component.html',
    styleUrls: ['./training-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    training: NewTraining;

    constructor(
        private readonly sharedStoreService: SharedStoreService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.timeCreated = format(new Date(this.training.trainingDate), 'HH:mm');
        this.dayIndex = new Date(this.training.trainingDate).getDay();
    }

    async trainingClicked(): Promise<void> {
        this.route.queryParams
            .pipe(
                take(1),
            )
            .subscribe(async (params: Params) => {
                this.sharedStoreService.emitPastTrainingsQueryParams(params as PastTrainingsQueryParams);
                await Storage.set({
                    key: StorageItems.QUERY_PARAMS,
                    value: JSON.stringify(params as PastTrainingsQueryParams),
                });
                await this.router.navigate(['/training/new-training', this.training._id]);
            });
    }

}
