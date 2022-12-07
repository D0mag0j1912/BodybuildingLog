import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DialogRoles } from '../../../constants/enums/dialog-roles.enum';
import { Preferences } from '../../../models/common/preferences.model';
import {
    LanguageCodeType,
    PreferenceChangedType,
    WeightUnitType,
} from '../../../models/common/preferences.type';

interface LanguageData {
    languageCode: LanguageCodeType;
    imageUrl: string;
    languageName: string;
}

interface UnitData {
    unitName: string;
    weightUnit: WeightUnitType;
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

    readonly languageData: LanguageData[] = [
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

    constructor(private _popoverController: PopoverController) {}

    async changePreference(preference: LanguageCodeType | WeightUnitType): Promise<void> {
        await this._popoverController.dismiss(preference, DialogRoles.CHANGE_PREFERENCE);
    }
}
