import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import { share, switchMap, take } from 'rxjs/operators';
import { startOfWeek, startOfDay, endOfWeek, endOfDay, format } from 'date-fns';
import { Preferences } from '../../../models/common/preferences.model';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';
import { PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';
import { QUERY_PARAMS_DATE_FORMAT } from '../../../constants/training/past-trainings-date-format.const';
import { PreferencesComponent } from '../preferences/preferences.component';
import { PreferenceChangedType } from '../../../models/common/preferences.type';
import { PastTrainingsStoreService } from '../../../services/store/training/past-trainings-store.service';

@Component({
    selector: 'bl-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {

    readonly isAuthenticated$: Observable<boolean> = this._authStoreService.isAuth$
        .pipe(share());
    private readonly preferences$: Observable<Preferences> = this._preferencesStoreService.preferencesChanged$
        .pipe(take(1));

    constructor(
        private readonly _authStoreService: AuthStoreService,
        private readonly _pastTrainingsStoreService: PastTrainingsStoreService,
        private readonly _preferencesStoreService: PreferencesStoreService,
        private readonly _popoverController: PopoverController,
        private readonly _router: Router,
    ) { }

    async onLogout(): Promise<void> {
        await this._authStoreService.logout();
    }

    async goToPastTrainings(): Promise<void> {
        this._pastTrainingsStoreService.pastTrainingsQueryParams$
            .pipe(
                take(1),
            )
            .subscribe(async params => {
                let queryParams: PastTrainingsQueryParams;
                if (params) {
                    queryParams = params;
                }
                else {
                    const showByPeriod = this._preferencesStoreService.getPreferences()?.showByPeriod ?? 'week';
                    const startDate = startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
                    const endDate = showByPeriod === 'week' ? endOfWeek(endOfDay(new Date()), { weekStartsOn: 1 }) : startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
                    queryParams = {
                        startDate: format(startDate, QUERY_PARAMS_DATE_FORMAT),
                        endDate: format(endDate, QUERY_PARAMS_DATE_FORMAT),
                        showBy: showByPeriod,
                    };
                }
                await this._router.navigate(['/training/past-trainings'], { queryParams });
            });
    }

    openPreferencePopover(
        $event: Event,
        preferenceType: PreferenceChangedType,
    ): void {
        $event.stopPropagation();
        this.preferences$
            .pipe(
                switchMap(preferences => from(this._popoverController.create({
                        component: PreferencesComponent,
                        event: $event,
                        componentProps: {
                            preferences,
                            preferenceType,
                        },
                        side: 'left',
                        keyboardClose: true,
                    })),
                ),
                switchMap(popover => from(popover.present())),
            )
            .subscribe();
    }

}
