import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { AuthResponseData } from './models/auth/auth-data.model';
import { LocalStorageItems } from './models/common/interfaces/common.model';
import { AuthService } from './services/auth/auth.service';
import { SharedService } from './services/shared/shared.service';
import { UnsubscribeService } from './services/shared/unsubscribe.service';
import { NewTrainingService } from './services/training/new-training.service';

@Component({
    selector: 'bl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class AppComponent implements OnInit {

    constructor(
        private readonly authService: AuthService,
        private readonly sharedService: SharedService,
        private readonly newTrainingService: NewTrainingService,
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
        this.authService.autoLogin();
        this.newTrainingService.keepTrainingState();
        this.sharedService.keepQueryParams();
    }
}
