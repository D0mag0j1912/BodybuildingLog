import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import { share, switchMap, take } from 'rxjs/operators';
import { startOfWeek, startOfDay, endOfWeek, endOfDay, format } from 'date-fns';
import { Preferences } from '../../../models/common/preferences.model';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-store.service';
import { SharedStoreService } from '../../../services/store/shared/shared-store.service';
import { PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';
import { QUERY_PARAMS_DATE_FORMAT } from '../../../constants/training/past-trainings-date-format.const';
import { LanguagesComponent } from './languages/languages.component';
import { UnitsComponent } from './units/units.component';

@Component({
    selector: 'bl-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {

    readonly isAuthenticated$: Observable<boolean> = this.authStoreService.isAuth$
        .pipe(share());
    private readonly preferences$: Observable<Preferences> = this.preferencesStoreService.preferencesChanged$
        .pipe(take(1));

    constructor(
        private readonly authStoreService: AuthStoreService,
        private readonly sharedStoreService: SharedStoreService,
        private readonly preferencesStoreService: PreferencesStoreService,
        private readonly popoverController: PopoverController,
        private readonly router: Router,
    ) { }

    async onLogout(): Promise<void> {
        await this.authStoreService.logout();
    }

    async goToPastTrainings(): Promise<void> {
        this.sharedStoreService.pastTrainingsQueryParams$
            .pipe(
                take(1),
            )
            .subscribe(async params => {
                let queryParams: PastTrainingsQueryParams;
                if (params) {
                    queryParams = params;
                }
                else {
                    const showByPeriod = this.preferencesStoreService.getPreferences()?.showByPeriod ?? 'week';
                    const startDate = startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
                    const endDate = showByPeriod === 'week' ? endOfWeek(endOfDay(new Date()), { weekStartsOn: 1 }) : startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
                    queryParams = {
                        startDate: format(startDate, QUERY_PARAMS_DATE_FORMAT),
                        endDate: format(endDate, QUERY_PARAMS_DATE_FORMAT),
                        showBy: showByPeriod,
                    };
                }
                await this.router.navigate(['/training/past-trainings'], { queryParams });
            });
    }

    openLanguagePopover($event: Event): void {
        $event.stopPropagation();
        this.preferences$
            .pipe(
                switchMap(preferences => from(this.popoverController.create({
                        component: LanguagesComponent,
                        event: $event,
                        componentProps: { preferences },
                        side: 'left',
                        keyboardClose: true,
                    })),
                ),
                switchMap(popover => from(popover.present())),
            )
            .subscribe();
    }

    async openUnitPopover($event: Event): Promise<void> {
        $event.stopPropagation();
        const popover = await this.popoverController.create({
            component: UnitsComponent,
            event: $event,
            componentProps: { preferences: this.preferences$ },
            side: 'left',
            keyboardClose: true,
        });
        await popover.present();
    }

}
