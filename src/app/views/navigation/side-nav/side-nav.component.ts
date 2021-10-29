import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { endOfWeek, format, startOfWeek } from 'date-fns';
import { Observable } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavigationService } from 'src/app/services/shared/navigation.service';
import { UnsubscribeService } from 'src/app/services/shared/unsubscribe.service';
import { NewTrainingService } from 'src/app/services/training/new-training.service';
@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    providers: [UnsubscribeService],
})
export class SideNavComponent implements OnInit {

    @Output()
    closeSideNav: EventEmitter<void> = new EventEmitter<void>();

    isAuthenticated$: Observable<boolean>;
    loggedUserData$: Observable<AuthResponseData>;

    constructor(
        private readonly authService: AuthService,
        private readonly navigationService: NavigationService,
        private readonly newTrainingService: NewTrainingService,
        private readonly unsubsService: UnsubscribeService,
        private readonly router: Router,
    ) {}

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
            weekStartsOn: 1
        });
        const endDate: Date = endOfWeek(new Date(), {
            weekStartsOn: 1
        });
        await this.router.navigate(['/past-trainings'], {
            queryParams: {
                startDate: format(startDate, 'dd-MM-yyyy'),
                endDate: format(endDate, 'dd-MM-yyyy')
            }
        });
    }

    changeLanguage(language: string): void {
        this.authService.loggedUser$.pipe(
            take(1),
            switchMap((userData: AuthResponseData) =>
                this.navigationService.setPreferences(
                    userData._id,
                    language,
                    'kg'
                ).pipe(
                    tap(_ => {
                        this.onCloseSideNav();
                    })
                )
            ),
            takeUntil(this.unsubsService)
        ).subscribe();
    }

    onCloseSideNav(): void {
        this.closeSideNav.emit();
    }
}
