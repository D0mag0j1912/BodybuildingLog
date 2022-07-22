import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UnsubscribeService } from './services/shared/unsubscribe.service';
import { SharedStoreService } from './services/store/shared/shared-store.service';
import { NewTrainingStoreService } from './services/store/training/new-training-store.service';

@Component({
    selector: 'bl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class AppComponent implements OnInit {

    constructor(
        private readonly newTrainingStoreService: NewTrainingStoreService,
        private readonly sharedStoreService: SharedStoreService,
        private readonly translateService: TranslateService,
    ) { }

    ngOnInit(): void {
        this.newTrainingStoreService.keepTrainingState()
            .subscribe();
        this.sharedStoreService.keepQueryParams()
            .subscribe();

        this.translateService.setDefaultLang('en');
    }
}
