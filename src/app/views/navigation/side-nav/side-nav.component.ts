import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { endOfWeek, format, startOfWeek } from 'date-fns';
import { Observable } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { Language } from '../../../models/preferences.model';
import { QUERY_PARAMS_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { AuthService } from '../../../services/auth/auth.service';
import { NavigationService } from '../../../services/shared/navigation.service';
import { UnsubscribeService } from '../../../services/shared/unsubscribe.service';
import { NewTrainingService } from '../../../services/training/new-training.service';

@Component({
    selector: 'bl-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class SideNavComponent implements OnInit {

    isAuthenticated$: Observable<boolean>;
    loggedUserData$: Observable<AuthResponseData>;

    constructor(
        private readonly authService: AuthService,
        private readonly navigationService: NavigationService,
        private readonly newTrainingService: NewTrainingService,
        private readonly unsubsService: UnsubscribeService,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.isAuthenticated$ = this.authService.isAuth$;
        this.loggedUserData$ = this.authService.loggedUser$;
    }

    async onLogout(): Promise<void> {
        this.newTrainingService.clearTrainingData();
        await this.authService.logout();
    }

    async goToPastTrainings(): Promise<void> {
        const startDate: Date = startOfWeek(new Date(), {
            weekStartsOn: 1,
        });
        const endDate: Date = endOfWeek(new Date(), {
            weekStartsOn: 1,
        });
        await this.router.navigate(['/training/past-trainings'], {
            queryParams: {
                startDate: format(startDate, QUERY_PARAMS_DATE_FORMAT),
                endDate: format(endDate, QUERY_PARAMS_DATE_FORMAT),
            },
        });
    }

    changeLanguage(language: Language): void {
        this.authService.loggedUser$.pipe(
            take(1),
            switchMap((userData: AuthResponseData) =>
                this.navigationService.setPreferences(
                    userData._id,
                    language,
                    'kg',
                ),
            ),
            takeUntil(this.unsubsService),
        ).subscribe();
    }

}
