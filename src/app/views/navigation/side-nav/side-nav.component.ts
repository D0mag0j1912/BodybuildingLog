import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from 'date-fns';
import { Observable } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { Preferences } from '../../../models/interfaces/preferences.model';
import { PastTrainingsQueryParams, PeriodFilterType, QUERY_PARAMS_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-state.service';
import { TrainingStoreService } from '../../../services/store/training/training-store.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { LanguagesComponent } from './languages/languages.component';

@Component({
    selector: 'bl-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class SideNavComponent {

    readonly isAuthenticated$: Observable<boolean> = this.authStateService.isAuth$;
    private readonly preferences$: Observable<Preferences> = this.preferencesStateService.preferencesChanged$
        .pipe(take(1));

    previousUrl: string;
    currentUrl: string;

    constructor(
        private readonly authStateService: AuthStoreService,
        private readonly preferencesStateService: PreferencesStoreService,
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
        await this.authStateService.logout();
    }

    async goToPastTrainings(): Promise<void> {
        await this.router.navigate(['/training/past-trainings'], { queryParams: this.getQueryParamsFromPreviousUrl(this.previousUrl) });
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

    private getQueryParamsFromPreviousUrl(previousUrl: string): PastTrainingsQueryParams {
        if (previousUrl) {
            const obj = Object.assign({}) as PastTrainingsQueryParams;
            const url = previousUrl.split('?');
            const queryParams = url[1].split('&');
            for (const entry of queryParams) {
                const [key, value] = entry.split('=');
                const castedKey = key as keyof PastTrainingsQueryParams & keyof PeriodFilterType;
                obj[castedKey] = value;
            }
            return obj;
        }
        else {
            const showByPeriod = this.preferencesStateService.getPreferences()?.ShowByPeriod ?? 'week';
            const startDate = startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
            const endDate = showByPeriod === 'week' ? endOfWeek(endOfDay(new Date()), { weekStartsOn: 1 }) : startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
            return {
                startDate: format(startDate, QUERY_PARAMS_DATE_FORMAT),
                endDate: format(endDate, QUERY_PARAMS_DATE_FORMAT),
                showBy: showByPeriod,
            } as PastTrainingsQueryParams;
        }
    }

}
