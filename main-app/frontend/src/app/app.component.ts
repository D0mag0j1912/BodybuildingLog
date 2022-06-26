import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { PreferencesService } from './services/shared/preferences.service';
import { UnsubscribeService } from './services/shared/unsubscribe.service';
import { AuthStoreService } from './services/store/auth/auth-store.service';
import { PreferencesStoreService } from './services/store/shared/preferences-store.service';
import { SharedStoreService } from './services/store/shared/shared-store.service';
import { TrainingStoreService } from './services/store/training/training-store.service';

@Component({
    selector: 'bl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class AppComponent implements OnInit {

    constructor(
        private readonly authStoreService: AuthStoreService,
        private readonly trainingStoreService: TrainingStoreService,
        private readonly sharedStoreService: SharedStoreService,
        private readonly translateService: TranslateService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly preferencesService: PreferencesService,
        private readonly preferencesStoreService: PreferencesStoreService,
    ) { }

    ngOnInit(): void {
        this.trainingStoreService.keepTrainingState()
            .subscribe();
        this.sharedStoreService.keepQueryParams()
            .subscribe();

        this.translateService.setDefaultLang('en');
        this.authStoreService.loggedUser$
            .pipe(
                take(1),
                switchMap(loggedUser => {
                    if (loggedUser) {
                        return this.preferencesService.getPreferences(loggedUser._id)
                            .pipe(
                                tap(preferences => this.preferencesStoreService.emitPreferences(preferences)),
                                switchMap(preferences => this.translateService.use(preferences.languageCode || 'en')),
                            );
                    }
                    else {
                        return EMPTY;
                    }
                }),
                takeUntil(this.unsubscribeService),
            )
            .subscribe();
    }
}
