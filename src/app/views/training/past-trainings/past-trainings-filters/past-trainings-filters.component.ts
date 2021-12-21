import { ChangeDetectionStrategy, Component } from '@angular/core';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { AuthResponseData } from '../../../../models/auth/auth-data.model';
import { AuthService } from '../../../../services/auth/auth.service';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { PastTrainingsService } from '../../../../services/training/past-trainings.service';

@Component({
    selector: 'bl-past-trainings-filters',
    templateUrl: './past-trainings-filters.component.html',
    styleUrls: ['./past-trainings-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class PastTrainingsFiltersComponent {

    constructor(
        private readonly authService: AuthService,
        private readonly unsubscribeService: UnsubscribeService,
        private readonly pastTrainingsService: PastTrainingsService,
    ) {}

    openFilterDialog(): void {}

    onSearch($event: Event): void {
        const value: string = ($event.target as HTMLInputElement).value.trim();
        if (value === '') {
            return;
        }
        this.authService.loggedUser$
            .pipe(
                take(1),
                switchMap((loggedUserData: AuthResponseData) =>
                    this.pastTrainingsService.searchPastTrainings(
                        value as string,
                        loggedUserData._id as string,
                    ),
                ),
                takeUntil(this.unsubscribeService),
            ).subscribe();
    }
}
