import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MESSAGE_DURATION } from '../../constants/message-duration.const';
import { GeneralResponseData } from '../../models/general-response.model';
import { PreferenceChangedType, Preferences } from '../../models/preferences.model';
import { PreferencesStateService } from '../state/shared/preferences-state.service';
import { ToastControllerService } from './toast-controller.service';

@Injectable({ providedIn: 'root' })
export class PreferencesService {

    constructor(
        private readonly http: HttpClient,
        private readonly translateService: TranslateService,
        private readonly toastControllerService: ToastControllerService,
        private readonly preferencesStateService: PreferencesStateService,
    ) { }

    getPreferences(userId: string): Observable<Preferences> {
        return this.http.get<Preferences>(environment.BACKEND + `/preferences/${userId}`);
    }

    setPreferences(
        preferences: Preferences,
        preferenceChanged: PreferenceChangedType,
    ): Observable<GeneralResponseData> {
        const apiPreferences: Partial<Preferences> = {
            LanguageCode: preferences.LanguageCode,
            WeightFormat: preferences.WeightFormat,
            ShowByPeriod: preferences.ShowByPeriod,
        };
        return this.http.put<GeneralResponseData>(environment.BACKEND + `/preferences/${preferences.UserId}`, {
            preferences: apiPreferences,
            preferenceChanged: preferenceChanged,
        })
        .pipe(
            switchMap((response: GeneralResponseData) =>
                this.translateService.use(preferences.LanguageCode)
                    .pipe(
                        tap(async _ => {
                            this.preferencesStateService.emitPreferences(preferences);
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
