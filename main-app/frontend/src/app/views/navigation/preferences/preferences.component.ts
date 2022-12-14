import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DialogRoles } from '../../../constants/enums/dialog-roles.enum';
import { Preferences } from '../../../models/common/preferences.model';
import {
    LanguageCodeType,
    PreferenceChangedType,
    WeightUnitType,
} from '../../../models/common/preferences.type';
import { SetDurationUnitType } from '../../../models/training/new-training/single-exercise/set/set.type';

type LanguageDataType = {
    languageCode: LanguageCodeType;
    imageUrl: string;
    languageName: string;
};

type WeightUnitDataType = {
    unitName: string;
    weightUnit: WeightUnitType;
};

type SetDurationUnitDataType = {
    unitName: string;
    setDurationUnit: SetDurationUnitType;
};

@Component({
    selector: 'bl-preferences',
    templateUrl: './preferences.component.html',
    styleUrls: ['./preferences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesComponent {
    readonly languageData: LanguageDataType[] = [
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

    readonly weightUnitData: WeightUnitDataType[] = [
        {
            unitName: 'units.kilograms',
            weightUnit: 'kg',
        },
        {
            unitName: 'units.pounds',
            weightUnit: 'lbs',
        },
    ];

    readonly setDurationUnitData: SetDurationUnitDataType[] = [
        {
            unitName: 'units.seconds',
            setDurationUnit: 'seconds',
        },
        {
            unitName: 'units.minutes',
            setDurationUnit: 'minutes',
        },
    ];

    @Input()
    preferences: Preferences;

    @Input()
    preferenceType: PreferenceChangedType = 'language';

    constructor(private _popoverController: PopoverController) {}

    async changePreference(
        preference: LanguageCodeType | WeightUnitType | SetDurationUnitType,
    ): Promise<void> {
        await this._popoverController.dismiss(preference, DialogRoles.CHANGE_PREFERENCE);
    }
}
