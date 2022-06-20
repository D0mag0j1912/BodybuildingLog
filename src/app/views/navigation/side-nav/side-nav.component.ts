import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { Preferences } from '../../../models/interfaces/preferences.model';
import { AuthStoreService } from '../../../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../../../services/store/shared/preferences-state.service';
import { TrainingStoreService } from '../../../services/store/training/training-store.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { getQueryParamsFromPreviousUrl } from '../../../helpers/training/past-trainings/get-query-params-from-url.helper';
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
        await this.router.navigate(['/training/past-trainings'], { queryParams: getQueryParamsFromPreviousUrl(this.previousUrl, this.preferencesStoreService.getPreferences()) });
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
