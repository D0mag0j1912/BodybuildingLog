import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MESSAGE_DURATION } from '../../constants/message-duration.const';
import { GeneralResponseData } from '../../models/general-response.model';
import { PreferenceChangedType, Preferences, WeightFormat } from '../../models/preferences.model';
import { LanguageCode } from '../../models/preferences.model';
import { AuthStateService } from '../state/auth/auth-state.service';
import { ToastControllerService } from './toast-controller.service';

@Injectable({ providedIn: 'root' })
export class PreferencesService {

    constructor(
        private readonly http: HttpClient,
        private readonly authStateService: AuthStateService,
        private readonly translateService: TranslateService,
        private readonly toastControllerService: ToastControllerService,
    ) { }

    getPreferences(userId: string): Observable<Preferences> {
        return this.http.get<Preferences>(environment.BACKEND + `/preferences/${userId}`);
    }

    setPreferences(
        userId: string,
        language: LanguageCode,
        weightFormat: WeightFormat,
        preferenceChanged: PreferenceChangedType,
    ): Observable<GeneralResponseData> {
        const preferences: Partial<Preferences> = {
            LanguageCode: language,
            WeightFormat: weightFormat,
        };
        return this.http.put<GeneralResponseData>(environment.BACKEND + `/preferences/${userId}`, {
            preferences: preferences,
            preferenceChanged: preferenceChanged,
        })
        .pipe(
            tap(_ => {
                this.authStateService.updateUserData({
                    UserId: userId,
                    LanguageCode: language,
                    WeightFormat: weightFormat,
                } as Preferences);
            }),
            switchMap((response: GeneralResponseData) =>
                this.translateService.use(language)
                    .pipe(
                        tap(async _ => {
                            if (response.Message) {
                                await this.toastControllerService.displayToast({
                                    message: this.translateService.instant(response.Message),
                                    duration: MESSAGE_DURATION.GENERAL,
                                    color: 'primary',
                                });
                            }
                        }),
                    ),
            ),
        );
    }

}
