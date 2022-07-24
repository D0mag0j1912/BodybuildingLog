import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MESSAGE_DURATION } from '../../constants/shared/message-duration.const';
import { GeneralResponseData } from '../../models/common/general-response.model';
import { Preferences } from '../../models/common/preferences.model';
import { PreferenceChangedType } from '../../models/common/preferences.type';
import { PreferencesStoreService } from '../store/shared/preferences-store.service';
import { NewTrainingStoreService } from '../store/training/new-training-store.service';
import { ToastControllerService } from './toast-controller.service';

@Injectable({ providedIn: 'root' })
export class PreferencesService {

    constructor(
        private readonly http: HttpClient,
        private readonly translateService: TranslateService,
        private readonly toastControllerService: ToastControllerService,
        private readonly preferencesStoreService: PreferencesStoreService,
        private readonly newTrainingStoreService: NewTrainingStoreService,
    ) { }

    getPreferences(userId: string): Observable<Preferences> {
        return this.http.get<Preferences>(environment.BACKEND + `/preferences/${userId}`);
    }

    setPreferences(
        preferences: Preferences,
        preferenceChanged: PreferenceChangedType,
    ): Observable<GeneralResponseData> {
        const apiPreferences: Partial<Preferences> = {
            languageCode: preferences.languageCode,
            weightUnit: preferences.weightUnit,
            showByPeriod: preferences.showByPeriod,
        };
        let apiResponse: GeneralResponseData;
        return this.http.put<GeneralResponseData>(environment.BACKEND + `/preferences/${preferences.userId}`, {
            preferences: apiPreferences,
            preferenceChanged: preferenceChanged,
        })
        .pipe(
            switchMap((response: GeneralResponseData) => {
                apiResponse = response;
                return this.translateService.use(preferences.languageCode)
                    .pipe(
                        tap(async _ => {
                            this.preferencesStoreService.emitPreferences(preferences);
                            if (response.Message) {
                                await this.toastControllerService.displayToast({
                                    message: this.translateService.instant(response.Message),
                                    duration: MESSAGE_DURATION.GENERAL,
                                    color: 'primary',
                                });
                            }
                        }),
                        switchMap(_ => {
                            if (preferenceChanged === 'weightUnit') {
                                return this.newTrainingStoreService.updateWeightUnit(apiPreferences.weightUnit)
                                    .pipe(
                                        switchMap(_ => of(apiResponse)),
                                    );
                            }
                            return of(apiResponse);
                        }),
                    );
            }),
        );
    }

}
