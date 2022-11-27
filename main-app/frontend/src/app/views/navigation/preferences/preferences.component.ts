import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DialogRoles } from '../../../constants/enums/dialog-roles.enum';
import { Preferences } from '../../../models/common/preferences.model';
import {
    LanguageCode,
    PreferenceChangedType,
    WeightUnit,
} from '../../../models/common/preferences.type';

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

    constructor(private _popoverController: PopoverController) {}

    async changePreference(preference: LanguageCode | WeightUnit): Promise<void> {
        await this._popoverController.dismiss(preference, DialogRoles.CHANGE_PREFERENCE);
    }
}
