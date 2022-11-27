import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopoverController, MenuController } from '@ionic/angular';
import { take, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { Preferences } from '../../../models/common/preferences.model';
import {
    LanguageCode,
    PreferenceChangedType,
    WeightUnit,
} from '../../../models/common/preferences.type';
import { PreferencesService } from '../../../services/shared/preferences.service';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';

interface LanguageData {
    languageCode: LanguageCode;
    imageUrl: string;
    languageName: string;
}

interface UnitData {
    unitName: string;
    weightUnit: WeightUnit;
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
            languageCode: 'en',
            imageUrl: '../../../../assets/images/flags/united-kingdom.png',
            languageName: 'languages.english',
        },
        {
            languageCode: 'hr',
            imageUrl: '../../../../assets/images/flags/croatia.png',
            languageName: 'languages.croatian',
        },
    ];

    readonly unitData: UnitData[] = [
        {
            unitName: 'units.kilograms',
            weightUnit: 'kg',
        },
        {
            unitName: 'units.pounds',
            weightUnit: 'lbs',
        },
    ];

    constructor(
        private _preferencesStoreService: PreferencesStoreService,
        private _authStoreService: AuthStoreService,
        private _preferencesService: PreferencesService,
        private _popoverController: PopoverController,
        private _menuController: MenuController,
    ) {}

    changePreference(preference: LanguageCode | WeightUnit): void {
        this._authStoreService.loggedUser$
            .pipe(
                take(1),
                withLatestFrom(this._preferencesStoreService.preferencesChanged$),
                switchMap(([userData, currentPreferences]: [AuthResponseData, Preferences]) => {
                    const preferences: Preferences = {
                        userId: userData._id,
                        languageCode:
                            this.preferenceType === 'language'
                                ? (preference as LanguageCode)
                                : currentPreferences.languageCode,
                        weightUnit:
                            this.preferenceType === 'weightUnit'
                                ? (preference as WeightUnit)
                                : currentPreferences.weightUnit,
                        showByPeriod: currentPreferences.showByPeriod,
                        setDurationUnit: currentPreferences.setDurationUnit,
                    };
                    return this._preferencesService.setPreferences(
                        preferences,
                        this.preferenceType,
                    );
                }),
            )
            .subscribe(async (_) => {
                await this._popoverController.dismiss();
                await this._menuController.close();
            });
    }
}
