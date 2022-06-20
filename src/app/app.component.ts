import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { PreferencesService } from './services/shared/preferences.service';
import { SharedStoreService } from './services/store/shared/shared-store.service';
import { UnsubscribeService } from './services/shared/unsubscribe.service';
import { AuthStoreService } from './services/store/auth/auth-store.service';
import { PreferencesStoreService } from './services/store/shared/preferences-state.service';
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
        private readonly authStateService: AuthStoreService,
        private readonly sharedStoreService: SharedStoreService,
        private readonly trainingStoreService: TrainingStoreService,
        private readonly translateService: TranslateService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly preferencesService: PreferencesService,
        private readonly preferencesStateService: PreferencesStoreService,
    ) { }

    ngOnInit(): void {
        this.authStateService.autoLogin();
        this.trainingStoreService.keepTrainingState();
        this.sharedStoreService.keepQueryParams();

        this.translateService.setDefaultLang('en');
        this.authStateService.loggedUser$
            .pipe(
                take(1),
                switchMap(loggedUser => {
                    if (loggedUser) {
                        return this.preferencesService.getPreferences(loggedUser._id)
                            .pipe(
                                tap(preferences => this.preferencesStateService.emitPreferences(preferences)),
                                switchMap(preferences => this.translateService.use(preferences.LanguageCode || 'en')),
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
