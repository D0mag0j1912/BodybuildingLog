import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { endOfWeek, format, startOfWeek } from 'date-fns';
import { Observable } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
import { NewTraining } from 'src/app/models/training/new-training/new-training.model';
import { NavigationService } from 'src/app/services/shared/navigation.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { UnsubscribeService } from 'src/app/services/shared/unsubscribe.service';
import { NewTrainingService } from 'src/app/services/training/new-training.service';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import { DateData } from '../../../models/training/past-trainings/past-trainings-response.model';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
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
    ) { }

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
            switchMap((_id: string) =>
                this.pastTrainingsService.getPastTraining(_id).pipe(
                    tap(async (training: NewTraining) => {
                        await this.router.navigate(['/past-trainings'], {
                            queryParams: {
                                startDate: format(this.constructDates(new Date(training.createdAt)).startDate, 'dd-MM-yyyy'),
                                endDate: format(this.constructDates(new Date(training.createdAt)).endDate, 'dd-MM-yyyy'),
                            },
                        });
                    }),
                )),
            takeUntil(this.unsubsService),
        ).subscribe();
    }

    async goToPastTrainings(): Promise<void> {
        await this.router.navigate(['/past-trainings'], {
            queryParams: {
                startDate: format(this.constructDates(new Date()).startDate, 'dd-MM-yyyy'),
                endDate: format(this.constructDates(new Date()).endDate, 'dd-MM-yyyy'),
            },
        });
    }

    onToggle(): void {
        this.toggleSideNav.emit();
    }

    changeLanguage(language: string): void {

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

    private constructDates(date: Date): DateData {
        const startDate: Date = startOfWeek(date, {
            weekStartsOn: 1,
        });
        const endDate: Date = endOfWeek(date, {
            weekStartsOn: 1,
        });
        return {
            startDate: startDate,
            endDate: endDate,
        } as DateData;
    }

}
