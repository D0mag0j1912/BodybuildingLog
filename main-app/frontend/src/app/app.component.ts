import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { StorageItems } from './constants/enums/storage-items.enum';
import { UnsubscribeService } from './services/shared/unsubscribe.service';
import { NewTrainingStoreService } from './services/store/training/new-training-store.service';
import { PastTrainingsStoreService } from './services/store/training/past-trainings-store.service';

@Component({
    selector: 'bl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class AppComponent implements OnInit {

    constructor(
        private readonly _newTrainingStoreService: NewTrainingStoreService,
        private readonly _pastTrainingsStoreService: PastTrainingsStoreService,
        private readonly _translateService: TranslateService,
        private readonly _unsubscribeService: UnsubscribeService,
    ) { }

    ngOnInit(): void {
        this._newTrainingStoreService.keepTrainingState()
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe();

        this._pastTrainingsStoreService.keepStreamValues([
            StorageItems.PAST_TRAININGS_SCROLL_WRAPPER,
            StorageItems.QUERY_PARAMS,
        ])
        .pipe(takeUntil(this._unsubscribeService))
        .subscribe();

        this._translateService.setDefaultLang('en');
    }
}
