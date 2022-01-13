import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { endOfWeek, format, startOfWeek } from 'date-fns';
import { Observable } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { Training } from 'src/app/models/training/new-training/new-training.model';
import { NavigationService } from 'src/app/services/shared/navigation.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { UnsubscribeService } from 'src/app/services/shared/unsubscribe.service';
import { NewTrainingService } from 'src/app/services/training/new-training.service';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import { Language } from '../../../models/preferences.model';
import { DateInterval } from '../../../models/training/past-trainings/past-trainings.model';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'bl-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class HeaderComponent implements OnInit {

    isAuthenticated$: Observable<boolean>;
    isEditing$: Observable<boolean>;
    loggedUserData$: Observable<AuthResponseData>;

    @Output()
    toggleSideNav: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly authService: AuthService,
        private readonly sharedService: SharedService,
        private readonly navigationService: NavigationService,
        private readonly unsubsService: UnsubscribeService,
        private readonly router: Router,
    ) {}

    ngOnInit(): void {
        this.isAuthenticated$ = this.authService.isAuth$;
        this.loggedUserData$ = this.authService.loggedUser$;
        this.isEditing$ = this.sharedService.editingTraining$$;
    }

    async onLogout(): Promise<void> {
        this.newTrainingService.clearTrainingData();
        await this.authService.logout();
    }

    goToPastTraining(): void {
        this.sharedService.pastTrainingId$$.pipe(
            take(1),
            switchMap((_id: string) => this.pastTrainingsService.getPastTraining(_id)),
            takeUntil(this.unsubsService),
        ).subscribe(async (training: Training) => {
            await this.router.navigate(['/training/past-trainings'], {
                queryParams: {
                    startDate: format(this.constructDates(new Date(training.createdAt)).StartDate, 'dd-MM-yyyy'),
                    endDate: format(this.constructDates(new Date(training.createdAt)).EndDate, 'dd-MM-yyyy'),
                },
            });
        });
    }

    async goToPastTrainings(): Promise<void> {
        await this.router.navigate(['/training/past-trainings'], {
            queryParams: {
                startDate: format(this.constructDates(new Date()).StartDate, 'dd-MM-yyyy'),
                endDate: format(this.constructDates(new Date()).EndDate, 'dd-MM-yyyy'),
            },
        });
    }

    onToggle(): void {
        this.toggleSideNav.emit();
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

    private constructDates(date: Date): DateInterval {
        const startDate: Date = startOfWeek(date, {
            weekStartsOn: 1,
        });
        const endDate: Date = endOfWeek(date, {
            weekStartsOn: 1,
        });
        return {
            StartDate: startDate,
            EndDate: endDate,
        } as DateInterval;
    }

}
