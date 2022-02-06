import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { endOfWeek, format, startOfWeek } from 'date-fns';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { Language } from '../../../models/preferences.model';
import { DateInterval, PastTrainingsQueryParams } from '../../../models/training/past-trainings/past-trainings.model';
import { QUERY_PARAMS_DATE_FORMAT } from '../../../models/training/past-trainings/past-trainings.model';
import { AuthService } from '../../../services/auth/auth.service';
import { NavigationService } from '../../../services/shared/navigation.service';
import { SharedService } from '../../../services/shared/shared.service';
import { NewTrainingService } from '../../../services/training/new-training.service';

interface IsActiveMatchOptions {
    matrixParams: 'exact' | 'subset' | 'ignored';
    queryParams: 'exact' | 'subset' | 'ignored';
    paths: 'exact' | 'subset';
    fragment: 'exact' | 'ignored';
}

@Component({
    selector: 'bl-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

    readonly myMatchOptions: IsActiveMatchOptions = {
        queryParams: 'ignored',
        matrixParams: 'exact',
        paths: 'exact',
        fragment: 'exact',
    };

    isAuthenticated$: Observable<boolean>;
    isEditing$: Observable<boolean>;
    loggedUserData$: Observable<AuthResponseData>;

    @Output()
    readonly toggleSideNav: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private readonly newTrainingService: NewTrainingService,
        private readonly authService: AuthService,
        private readonly sharedService: SharedService,
        private readonly navigationService: NavigationService,
        private readonly router: Router,
    ) {}

    get StartDate(): string {
        return format(this.constructDates(new Date())?.StartDate ?? new Date(), QUERY_PARAMS_DATE_FORMAT);
    }

    get EndDate(): string {
        return format(this.constructDates(new Date())?.EndDate ?? new Date(), QUERY_PARAMS_DATE_FORMAT);
    }

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
        this.sharedService.pastTrainingsQueryParams$$
            .pipe(
                take(1),
            ).subscribe(async (response: PastTrainingsQueryParams) => {
                await this.router.navigate(['/training/past-trainings'], {
                    queryParams: {
                        StartDate: response?.StartDate ? response.StartDate : undefined,
                        EndDate: response?.EndDate ? response.EndDate : undefined,
                        Search: response?.Search ? response.Search : undefined,
                        Page: response?.Page ? response.Page : undefined,
                        Size: response?.Size ? response.Size : undefined,
                    } as PastTrainingsQueryParams,
                });
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
