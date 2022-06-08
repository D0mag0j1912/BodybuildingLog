import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { AuthResponseData } from '../../../../models/auth/auth-data.model';
import { LanguageCode } from '../../../../models/preferences.model';
import { NavigationService } from '../../../../services/shared/navigation.service';
import { AuthStateService } from '../../../../services/state/auth/auth-state.service';

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
        private readonly authStateService: AuthStateService,
        private readonly navigationService: NavigationService,
        private readonly popoverController: PopoverController,
    ) { }

    changeLanguage(language: LanguageCode): void {
        this.authStateService.loggedUser$
            .pipe(
                take(1),
                switchMap((userData: AuthResponseData) =>
                    this.navigationService.setPreferences(
                        userData._id,
                        language,
                        'kg',
                    ),
                ),
            )
            .subscribe(async _ => await this.popoverController.dismiss());
    }
}
