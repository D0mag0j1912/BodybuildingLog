import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { AuthResponseData } from '../../../../models/auth/auth-data.model';
import { LanguageCode, Preferences } from '../../../../models/preferences.model';
import { PreferencesService } from '../../../../services/shared/preferences.service';
import { AuthStateService } from '../../../../services/state/auth/auth-state.service';
import { PreferencesStateService } from '../../../../services/state/shared/preferences-state.service';

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

    @Input()
    preferences$: Observable<Preferences>;

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

    constructor(
        private readonly preferencesStateService: PreferencesStateService,
        private readonly authStateService: AuthStateService,
        private readonly navigationService: PreferencesService,
        private readonly popoverController: PopoverController,
        private readonly menuController: MenuController,
    ) { }

    changeLanguage(language: LanguageCode): void {
        const currentPreferences = this.preferencesStateService.getPreferences();
        this.authStateService.loggedUser$
            .pipe(
                take(1),
                switchMap((userData: AuthResponseData) => {
                    const preferences: Preferences = {
                        UserId: userData._id,
                        LanguageCode: language,
                        WeightFormat: 'kg',
                        ShowByPeriod: currentPreferences.ShowByPeriod,
                    };
                    return this.navigationService.setPreferences(
                        preferences,
                        'language',
                    );
                }),
            )
            .subscribe(async _ => {
                await this.popoverController.dismiss();
                await this.menuController.close();
            });
    }
}
