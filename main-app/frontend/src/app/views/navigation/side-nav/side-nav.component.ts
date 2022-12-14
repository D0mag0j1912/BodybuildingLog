import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { EMPTY, from } from 'rxjs';
import { map, share, switchMap, take } from 'rxjs/operators';
import { startOfWeek, startOfDay, endOfWeek, endOfDay, format } from 'date-fns';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';
import { PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';
import { QUERY_PARAMS_DATE_FORMAT } from '../../../constants/training/past-trainings-date-format.const';
import { PreferencesComponent } from '../preferences/preferences.component';
import {
    LanguageCodeType,
    PreferenceChangedType,
    WeightUnitType,
} from '../../../models/common/preferences.type';
import { PastTrainingsStoreService } from '../../../services/store/training/past-trainings-store.service';
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
        private _pastTrainingsStoreService: PastTrainingsStoreService,
        private _preferencesStoreService: PreferencesStoreService,
        private _popoverController: PopoverController,
        private _menuController: MenuController,
        private _router: Router,
    ) {}

    async onLogout(): Promise<void> {
        await this._authStoreService.logout();
    }

    async goToPastTrainings(): Promise<void> {
        this._pastTrainingsStoreService.pastTrainingsQueryParams$
            .pipe(take(1))
            .subscribe(async (params) => {
                let queryParams: PastTrainingsQueryParams;
                if (params) {
                    queryParams = params;
                } else {
                    const showByPeriod =
                        this._preferencesStoreService.getPreferences()?.showByPeriod ?? 'week';
                    const startDate = startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
                    const endDate =
                        showByPeriod === 'week'
                            ? endOfWeek(endOfDay(new Date()), { weekStartsOn: 1 })
                            : startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
                    queryParams = {
                        startDate: format(startDate, QUERY_PARAMS_DATE_FORMAT),
                        endDate: format(endDate, QUERY_PARAMS_DATE_FORMAT),
                        showBy: showByPeriod,
                    };
                }
                await this._router.navigate(['/training/past-trainings'], { queryParams });
            });
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
