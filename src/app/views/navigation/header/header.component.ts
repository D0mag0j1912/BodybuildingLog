import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AuthService } from '../../../services/auth/auth.service';
import { startOfWeek, endOfWeek, format } from 'date-fns';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { PastTrainingsService } from 'src/app/services/training/past-trainings.service';
import { NewTraining } from 'src/app/models/training/new-training.model';
import { NavigationService } from 'src/app/services/navigation.service';
import { AuthResponseData } from 'src/app/models/auth/auth-data.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    isAuthenticated$: Observable<boolean>;
    isEditing$: Observable<boolean>;
    loggedUserData$: Observable<AuthResponseData>;

    private readonly subscription$$: Subject<void> = new Subject<void>();

    @Output() toggleSideNav = new EventEmitter<void>();

    constructor(
        private readonly pastTrainingsService: PastTrainingsService,
        private readonly authService: AuthService,
        private readonly sharedService: SharedService,
        private readonly navigationService: NavigationService,
        private readonly router: Router
    ) { }

    //Metoda koja se pokreće kada se komponenta inicijalizira
    ngOnInit(): void {

        this.isAuthenticated$ = this.authService.isAuth$;
        this.loggedUserData$ = this.authService.loggedUser$;
        this.isEditing$ = this.sharedService.editingTraining$;
    }

    ngOnDestroy(): void {
        this.subscription$$.next();
        this.subscription$$.complete();
    }

    //Metoda koja se pokreće kada se klikne "Logout"
    onLogout(){
        this.authService.logout();
    }

    goToPastTraining(): void {
        this.sharedService.pastTrainingId$$.pipe(
            take(1),
            switchMap((_id: string) => {
                return this.pastTrainingsService.getPastTraining(_id).pipe(
                    tap((training: NewTraining) => {
                        this.router.navigate(['/past-trainings'], {
                            queryParams: {
                                startDate: format(this.constructDates(new Date(training.createdAt)).startDate, 'dd-MM-yyyy'),
                                endDate: format(this.constructDates(new Date(training.createdAt)).endDate, 'dd-MM-yyyy')
                            }
                        });
                    })
                );
            }),
            takeUntil(this.subscription$$)
        ).subscribe();
    }

    goToPastTrainings(): void {
        this.router.navigate(['/past-trainings'], {
            queryParams: {
                startDate: format(this.constructDates(new Date()).startDate, 'dd-MM-yyyy'),
                endDate: format(this.constructDates(new Date()).endDate, 'dd-MM-yyyy')
            }
        });
    }

    //Metoda koja se poziva kada korisnik klikne na "Toggle sidenav"
    onToggle(){
        this.toggleSideNav.emit();
    }

    changeLanguage(language: string): void {

        this.authService.loggedUser$.pipe(
            take(1),
            switchMap((userData: AuthResponseData) => {
                return this.navigationService.setPreferences(
                    userData._id,
                    language,
                    'kg'
                );
            }),
            takeUntil(this.subscription$$)
        ).subscribe();
    }

    private constructDates(date: Date): {
        startDate: Date,
        endDate: Date
    } {
        const startDate: Date = startOfWeek(date, {
            weekStartsOn: 1
        });
        const endDate: Date = endOfWeek(date, {
            weekStartsOn: 1
        });
        return {
            startDate: startDate,
            endDate: endDate
        };
    }

}
