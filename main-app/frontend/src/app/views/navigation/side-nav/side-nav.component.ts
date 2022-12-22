import { Component } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { EMPTY, from } from 'rxjs';
import { map, share, switchMap, take } from 'rxjs/operators';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';
import { PreferencesComponent } from '../preferences/preferences.component';
import {
    LanguageCodeType,
    PreferenceChangedType,
    WeightUnitType,
} from '../../../models/common/preferences.type';
import { Preferences } from '../../../models/common/preferences.model';
import { DialogRoles } from '../../../constants/enums/dialog-roles.enum';
import { PreferencesService } from '../../../services/shared/preferences.service';
import { SetDurationUnitType } from '../../../models/training/new-training/single-exercise/set/set.type';

@Component({
    selector: 'bl-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
    isAuthenticated$ = this._authStoreService.isAuth$.pipe(share());

    constructor(
        private _preferencesService: PreferencesService,
        private _authStoreService: AuthStoreService,
        private _preferencesStoreService: PreferencesStoreService,
        private _popoverController: PopoverController,
        private _menuController: MenuController,
    ) {}

    async onLogout(): Promise<void> {
        await this._authStoreService.logout();
    }

    openPreferencePopover($event: Event, preferenceType: PreferenceChangedType): void {
        $event.stopPropagation();
        let currentPreferences: Preferences;
        this._preferencesStoreService.preferencesChanged$
            .pipe(
                take(1),
                switchMap((preferences: Preferences) => {
                    currentPreferences = preferences;
                    return from(
                        this._popoverController.create({
                            component: PreferencesComponent,
                            event: $event,
                            componentProps: {
                                preferences,
                                preferenceType,
                            },
                            side: 'left',
                            keyboardClose: true,
                        }),
                    );
                }),
                switchMap((popoverElement) =>
                    from(popoverElement.present()).pipe(map((_) => popoverElement)),
                ),
                switchMap((popoverElement) => from(popoverElement.onDidDismiss())),
                switchMap(
                    (popoverResponse: OverlayEventDetail<LanguageCodeType | WeightUnitType>) => {
                        if (popoverResponse.role === DialogRoles.CHANGE_PREFERENCE) {
                            const updatedPreferences: Preferences = {
                                ...currentPreferences,
                                languageCode:
                                    preferenceType === 'language'
                                        ? (popoverResponse.data as LanguageCodeType)
                                        : currentPreferences.languageCode,
                                weightUnit:
                                    preferenceType === 'weightUnit'
                                        ? (popoverResponse.data as WeightUnitType)
                                        : currentPreferences.weightUnit,
                                showByPeriod: currentPreferences.showByPeriod,
                                setDurationUnit:
                                    preferenceType === 'setDurationUnit'
                                        ? (popoverResponse.data as SetDurationUnitType)
                                        : currentPreferences.setDurationUnit,
                            };
                            return this._preferencesService.setPreferences(
                                updatedPreferences,
                                preferenceType,
                            );
                        }
                        return EMPTY;
                    },
                ),
            )
            .subscribe(async (_) => {
                await this._menuController.close();
            });
    }
}
