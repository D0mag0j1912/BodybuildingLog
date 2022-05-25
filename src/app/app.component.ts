import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthResponseData } from './models/auth/auth-data.model';
import { LocalStorageItems, StreamData } from './models/common/interfaces/common.model';
import { AuthService } from './services/auth/auth.service';
import { SharedService } from './services/shared/shared.service';
import { UnsubscribeService } from './services/shared/unsubscribe.service';
import { NewTrainingService } from './services/api/new-training.service';
import { NewTrainingStateService } from './services/state/new-training-state.service';
import { Exercise } from './models/training/exercise.model';
import { Training } from './models/training/new-training/training.model';

@Component({
    selector: 'bl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UnsubscribeService],
})
export class AppComponent implements OnInit {

    constructor(
        private readonly authService: AuthService,
        private readonly sharedService: SharedService,
        private readonly newTrainingService: NewTrainingService,
        private readonly newTrainingStateService: NewTrainingStateService,
        private readonly translateService: TranslateService,
        private readonly unsubscribeService: UnsubscribeService,
    ) {
        this.translateService.setDefaultLang('en');
        const authData: AuthResponseData = JSON.parse(localStorage.getItem(LocalStorageItems.USER_DATA));
        this.translateService.use(authData?.Preferences?.LanguageCode || 'en')
            .pipe(
                takeUntil(this.unsubscribeService),
            )
            .subscribe();

        this.newTrainingService.getExercises()
            .pipe(
                switchMap((response: StreamData<Exercise[]>) => {
                    const trainingState: Training = JSON.parse(localStorage.getItem(LocalStorageItems.TRAINING_STATE));
                    if (!trainingState) {
                        return this.authService.loggedUser$
                            .pipe(
                                take(1),
                                tap((authResponseData: AuthResponseData) => {
                                    this.newTrainingStateService.updateTrainingState(
                                        undefined,
                                        response.Value,
                                        true,
                                        authResponseData._id,
                                    );
                                    this.newTrainingStateService.emitAllExercises(response.Value);
                                    localStorage.setItem(LocalStorageItems.ALL_EXERCISES, JSON.stringify(response.Value));
                                }),
                                switchMap(_ => of(response)),
                            );
                    }
                    else {
                        return of(response);
                    }
                }),
                tap(newTrainingData => this.newTrainingStateService.emitNewTrainingDataStream(newTrainingData)),
            )
            .subscribe();
    }

    ngOnInit(): void {
        this.authService.autoLogin();
        this.newTrainingStateService.keepTrainingState();
        this.sharedService.keepQueryParams();
    }
}
