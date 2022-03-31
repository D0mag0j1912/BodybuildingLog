import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { take, switchMap, takeUntil } from 'rxjs/operators';
import { AuthResponseData } from '../../../../models/auth/auth-data.model';
import { LanguageCode } from '../../../../models/preferences.model';
import { AuthService } from '../../../../services/auth/auth.service';
import { NavigationService } from '../../../../services/shared/navigation.service';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';

interface LanguageData {
    LanguageCode: LanguageCode;
    ImageUrl: string;
    LanguageName: string;
}

@Component({
    selector: 'bl-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class LanguagesComponent {

    readonly languageData: Readonly<LanguageData[]> = [
        {
            LanguageCode: 'en',
            ImageUrl: '../../../../assets/images/flags/united-kingdom.png',
            LanguageName: 'languages.english',
        },
        {
            LanguageCode: 'hr',
            ImageUrl: '../../../../assets/images/flags/croatia.png',
            LanguageName: 'languages.croatian',
        },
    ];

    @Input()
    loggedUserData$: Observable<AuthResponseData>;

    constructor(
        private readonly authService: AuthService,
        private readonly navigationService: NavigationService,
        private readonly unsubscribeService: UnsubscribeService,
    ) { }

    changeLanguage(language: LanguageCode): void {
        this.authService.loggedUser$.pipe(
            take(1),
            switchMap((userData: AuthResponseData) =>
                this.navigationService.setPreferences(
                    userData._id,
                    language,
                    'kg',
                ),
            ),
            takeUntil(this.unsubscribeService),
        ).subscribe();
    }
}
