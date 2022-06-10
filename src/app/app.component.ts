import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { PreferencesService } from './services/shared/preferences.service';
import { SharedService } from './services/shared/shared.service';
import { UnsubscribeService } from './services/shared/unsubscribe.service';
import { AuthStateService } from './services/state/auth/auth-state.service';
import { PreferencesStateService } from './services/state/shared/preferences-state.service';
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
        private readonly preferencesService: PreferencesService,
        private readonly preferencesStateService: PreferencesStateService,
    ) { }

    ngOnInit(): void {
        this.authStateService.autoLogin();
        this.newTrainingStateService.keepTrainingState();
        this.sharedService.keepQueryParams();

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
