import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { AuthResponseData } from './models/auth/auth-data.model';
import { LocalStorageItems } from './models/common/interfaces/common.model';
import { SharedService } from './services/shared/shared.service';
import { UnsubscribeService } from './services/shared/unsubscribe.service';
import { AuthStateService } from './services/state/auth/auth-state.service';
import { NewTrainingStateService } from './services/state/training/new-training-state.service';

@Component({
    selector: 'bl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class AppComponent implements OnInit {

    constructor(
        private readonly authStateService: AuthStateService,
        private readonly sharedService: SharedService,
        private readonly newTrainingStateService: NewTrainingStateService,
        private readonly translateService: TranslateService,
        private readonly unsubscribeService: UnsubscribeService,
    ) {
        this.translateService.setDefaultLang('en');
        const authData: AuthResponseData = JSON.parse(localStorage.getItem(LocalStorageItems.USER_DATA));
        this.translateService.use(authData?.Preferences?.LanguageCode || 'en')
            .pipe(
                takeUntil(this.unsubscribeService),
            )
            .subscribe();
    }

    ngOnInit(): void {
        this.authStateService.autoLogin();
        this.newTrainingStateService.keepTrainingState();
        this.sharedService.keepQueryParams();
    }
}
