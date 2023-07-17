import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { register } from 'swiper/element/bundle';
import { StorageItems } from './constants/enums/storage-items.enum';
import { UnsubscribeService } from './services/shared/unsubscribe.service';
import { NewTrainingStoreService } from './services/store/training/new-training-store.service';
import { PastTrainingsStoreService } from './services/store/training/past-trainings-store.service';

register();
@Component({
    selector: 'bl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [UnsubscribeService],
})
export class AppComponent implements OnInit {
    constructor(
        private _newTrainingStoreService: NewTrainingStoreService,
        private _pastTrainingsStoreService: PastTrainingsStoreService,
        private _translateService: TranslateService,
        private _unsubscribeService: UnsubscribeService,
    ) {}

    ngOnInit(): void {
        this._newTrainingStoreService
            .keepTrainingState()
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe();

        this._pastTrainingsStoreService
            .keepStreamValues([StorageItems.PAST_TRAININGS_SCROLL_WRAPPER])
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe();

        this._translateService.setDefaultLang('en');
    }
}
