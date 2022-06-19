import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from 'date-fns';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Preferences } from '../../../models/interfaces/preferences.model';
import { PastTrainingsQueryParams, QUERY_PARAMS_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-state.service';
import { TrainingStoreService } from '../../../services/store/training/training-store.service';
import { LanguagesComponent } from './languages/languages.component';

@Component({
    selector: 'bl-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {

    readonly isAuthenticated$: Observable<boolean> = this.authStateService.isAuth$;
    private readonly preferences$: Observable<Preferences> = this.preferencesStateService.preferencesChanged$
        .pipe(take(1));

    constructor(
        private readonly authStateService: AuthStoreService,
        private readonly preferencesStateService: PreferencesStoreService,
        private readonly trainingStoreService: TrainingStoreService,
        private readonly popoverController: PopoverController,
        private readonly router: Router,
    ) { }

    async onLogout(): Promise<void> {
        this.trainingStoreService.clearTrainingState();
        await this.authStateService.logout();
    }

    async goToPastTrainings(): Promise<void> {
        const showByPeriod = this.preferencesStateService.getPreferences()?.ShowByPeriod ?? 'week';
        const startDate = startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
        const endDate = showByPeriod === 'week' ? endOfWeek(endOfDay(new Date()), { weekStartsOn: 1 }) : startOfWeek(startOfDay(new Date()), { weekStartsOn: 1 });
        await this.router.navigate(['/training/past-trainings'], {
            queryParams: {
                startDate: format(startDate, QUERY_PARAMS_DATE_FORMAT),
                endDate: format(endDate, QUERY_PARAMS_DATE_FORMAT),
                showBy: showByPeriod,
            } as PastTrainingsQueryParams,
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
