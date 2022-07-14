import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopoverController, MenuController } from '@ionic/angular';
import { take, switchMap } from 'rxjs/operators';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { Preferences } from '../../../models/common/preferences.model';
import { LanguageCode, PreferenceChangedType, WeightFormat } from '../../../models/common/preferences.type';
import { PreferencesService } from '../../../services/shared/preferences.service';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';

interface LanguageData {
    LanguageCode: LanguageCode;
    ImageUrl: string;
    LanguageName: string;
}

interface UnitData {
    UnitName: string;
    WeightFormat: WeightFormat;
}

@Component({
    selector: 'bl-preferences',
    templateUrl: './preferences.component.html',
    styleUrls: ['./preferences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesComponent {

    @Input()
    preferences: Preferences;

    @Input()
    preferenceType: PreferenceChangedType = 'language';

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

    readonly unitData: UnitData[] = [{
        UnitName: 'units.kilograms',
        WeightFormat: 'kg',
    }, {
        UnitName: 'units.pounds',
        WeightFormat: 'lbs',
    }];

    constructor(
        private readonly preferencesStoreService: PreferencesStoreService,
        private readonly authStoreService: AuthStoreService,
        private readonly preferencesService: PreferencesService,
        private readonly popoverController: PopoverController,
        private readonly menuController: MenuController,
    ) { }

    changePreference(language: LanguageCode): void {
        const currentPreferences = this.preferencesStoreService.getPreferences();
        this.authStoreService.loggedUser$
            .pipe(
                take(1),
                switchMap((userData: AuthResponseData) => {
                    const preferences: Preferences = {
                        userId: userData._id,
                        languageCode: language,
                        weightFormat: currentPreferences.weightFormat,
                        showByPeriod: currentPreferences.showByPeriod,
                    };
                    return this.preferencesService.setPreferences(
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
