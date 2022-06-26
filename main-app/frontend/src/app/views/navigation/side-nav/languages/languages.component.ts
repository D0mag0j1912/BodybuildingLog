import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { AuthResponseData } from '../../../../models/auth/auth-data.model';
import { Preferences } from '../../../../models/common/preferences.model';
import { LanguageCode } from '../../../../models/common/preferences.type';
import { PreferencesService } from '../../../../services/shared/preferences.service';
import { AuthStoreService } from '../../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../../services/store/shared/preferences-store.service';

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
        private readonly preferencesStoreService: PreferencesStoreService,
        private readonly authStoreService: AuthStoreService,
        private readonly navigationService: PreferencesService,
        private readonly popoverController: PopoverController,
        private readonly menuController: MenuController,
    ) { }

    changeLanguage(language: LanguageCode): void {
        const currentPreferences = this.preferencesStoreService.getPreferences();
        this.authStoreService.loggedUser$
            .pipe(
                take(1),
                switchMap((userData: AuthResponseData) => {
                    const preferences: Preferences = {
                        userId: userData._id,
                        languageCode: language,
                        weightFormat: 'kg',
                        showByPeriod: currentPreferences.showByPeriod,
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
