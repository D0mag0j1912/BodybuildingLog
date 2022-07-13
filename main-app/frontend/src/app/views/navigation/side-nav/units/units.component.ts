import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { MenuController, PopoverController } from '@ionic/angular';
import { AuthResponseData } from '../../../../models/auth/auth-data.model';
import { Preferences } from '../../../../models/common/preferences.model';
import { WeightFormat } from '../../../../models/common/preferences.type';
import { AuthStoreService } from '../../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../../services/store/shared/preferences-store.service';
import { PreferencesService } from '../../../../services/shared/preferences.service';

interface UnitData {
    UnitName: string;
    WeightFormat: WeightFormat;
}

@Component({
    selector: 'bl-units',
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitsComponent {

    @Input()
    preferences$: Observable<Preferences>;

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

    changeUnit(weightFormat: WeightFormat): void {
        const currentPreferences = this.preferencesStoreService.getPreferences();
        this.authStoreService.loggedUser$
            .pipe(
                take(1),
                switchMap((userData: AuthResponseData) => {
                    const preferences: Preferences = {
                        userId: userData._id,
                        languageCode: currentPreferences.languageCode,
                        weightFormat: weightFormat,
                        showByPeriod: currentPreferences.showByPeriod,
                    };
                    return this.preferencesService.setPreferences(
                        preferences,
                        'weightFormat',
                    );
                }),
            )
            .subscribe(async _ => {
                await this.popoverController.dismiss();
                await this.menuController.close();
            });
    }

}
