import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { startOfWeek, startOfDay, endOfWeek, endOfDay, format } from 'date-fns';
import { Preferences } from '../../../models/interfaces/preferences.model';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-state.service';
import { TrainingStoreService } from '../../../services/store/training/training-store.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { SharedStoreService } from '../../../services/store/shared/shared-store.service';
import { PastTrainingsQueryParams, QUERY_PARAMS_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { LanguagesComponent } from './languages/languages.component';

@Component({
    selector: 'bl-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class SideNavComponent {

    readonly isAuthenticated$: Observable<boolean> = this.authStoreService.isAuth$;
    private readonly preferences$: Observable<Preferences> = this.preferencesStoreService.preferencesChanged$
        .pipe(take(1));

    previousUrl: string;
    currentUrl: string;

    constructor(
        private readonly authStoreService: AuthStoreService,
        private readonly sharedStoreService: SharedStoreService,
        private readonly preferencesStoreService: PreferencesStoreService,
        private readonly trainingStoreService: TrainingStoreService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly popoverController: PopoverController,
        private readonly router: Router,
    ) {
        this.router.events
            .pipe(
                filter((e): e is NavigationEnd => e instanceof NavigationEnd),
                takeUntil(this.unsubscribeService),
            )
            .subscribe(event => {
                this.previousUrl = this.currentUrl;
                this.currentUrl = event.url;
            });
    }

    async onLogout(): Promise<void> {
        this.trainingStoreService.clearTrainingState();
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
                    const showByPeriod = this.preferencesStoreService.getPreferences()?.ShowByPeriod ?? 'week';
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

    async openPopover($event: Event): Promise<void> {
        const popover = await this.popoverController.create({
            component: LanguagesComponent,
            event: $event,
            componentProps: { preferences$: this.preferences$ },
            side: 'left',
            keyboardClose: true,
        });
        await popover.present();
    }

}
