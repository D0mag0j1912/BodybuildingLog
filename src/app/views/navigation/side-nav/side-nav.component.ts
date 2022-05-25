import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from 'date-fns';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { PastTrainingsQueryParams, QUERY_PARAMS_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { AuthService } from '../../../services/auth/auth.service';
import { NewTrainingStateService } from '../../../services/state/training/new-training-state.service';
import { LanguagesComponent } from './languages/languages.component';

@Component({
    selector: 'bl-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements OnInit {

    isAuthenticated$: Observable<boolean>;
    loggedUserData$: Observable<AuthResponseData>;

    constructor(
        private readonly authService: AuthService,
        private readonly newTrainingStateService: NewTrainingStateService,
        private readonly popoverController: PopoverController,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.isAuthenticated$ = this.authService.isAuth$;
        this.loggedUserData$ = this.authService.loggedUser$;
    }

    async onLogout(): Promise<void> {
        this.newTrainingStateService.clearTrainingState();
        await this.authService.logout();
    }

    async goToPastTrainings(): Promise<void> {
        const startDate: Date = startOfWeek(startOfDay(new Date()), {
            weekStartsOn: 1,
        });
        const endDate: Date = endOfWeek(endOfDay(new Date()), {
            weekStartsOn: 1,
        });
        await this.router.navigate(['/training/past-trainings'], {
            queryParams: {
                startDate: format(startDate, QUERY_PARAMS_DATE_FORMAT),
                endDate: format(endDate, QUERY_PARAMS_DATE_FORMAT),
                showBy: 'week',
            } as PastTrainingsQueryParams,
        });
    }

    async openPopover($event: Event): Promise<void> {
        const popover = await this.popoverController.create({
            component: LanguagesComponent,
            event: $event,
            componentProps: { loggedUserData$: this.loggedUserData$ },
            side: 'left',
            keyboardClose: true,
        });
        await popover.present();
    }

}
