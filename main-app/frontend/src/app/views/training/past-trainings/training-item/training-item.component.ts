import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { format } from 'date-fns';
import { take } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { StorageItems } from '../../../../constants/enums/storage-items.enum';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { PastTrainingsQueryParams } from '../../../../models/training/past-trainings/past-trainings.model';
import { TrainingItemActions } from '../../../../models/training/past-trainings/training-actions/training-actions.model';
import { PastTrainingsStoreService } from '../../../../services/store/training/past-trainings-store.service';

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

    readonly actions: TrainingItemActions[] = ['delete', 'more'];

    timeCreated: string;
    dayIndex: number;

    @Input()
    training: NewTraining;

    @Output()
    readonly trainingItemClicked: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private readonly _pastTrainingsStoreService: PastTrainingsStoreService,
        private readonly _route: ActivatedRoute,
        private readonly _router: Router,
    ) {}

    ngOnInit(): void {
        this.timeCreated = format(new Date(this.training.trainingDate), 'HH:mm');
        this.dayIndex = new Date(this.training.trainingDate).getDay();
    }

    async trainingClicked(): Promise<void> {
        this._route.queryParams.pipe(take(1)).subscribe(async (params: Params) => {
            this.trainingItemClicked.emit();
            await this._pastTrainingsStoreService.emitPastTrainingsQueryParams(
                params as PastTrainingsQueryParams,
            );
            await Storage.set({
                key: StorageItems.QUERY_PARAMS,
                value: JSON.stringify(params as PastTrainingsQueryParams),
            });
            await this._router.navigate(['/training/new-training', this.training._id]);
        });
    }
}
