import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { MESSAGE_DURATION } from '../../../constants/shared/message-duration.const';
import { PreferenceChangedType } from '../../../models/common/preferences.type';
import { PreferencesStoreService } from '../../store/shared/preferences-store.service';
import { NewTrainingStoreService } from '../../store/training/new-training-store.service';
import { GeneralResponseDto } from '../../../../api/models';
import { ToastControllerService } from '../../shared/toast-controller.service';
import { PreferencesDto as Preferences } from '../../../../api/models/preferences-dto';

@Injectable({ providedIn: 'root' })
export class PreferencesService {
    constructor(
        private _http: HttpClient,
        private _translateService: TranslateService,
        private _toastControllerService: ToastControllerService,
        private _preferencesStoreService: PreferencesStoreService,
        private _newTrainingStoreService: NewTrainingStoreService,
    ) {}

    getPreferences(userId: string): Observable<Preferences> {
        return this._http.get<Preferences>(environment.apiUrl + `/api/preferences/${userId}`);
    }

    setPreferences(
        preferences: Preferences,
        preferenceChanged: PreferenceChangedType,
    ): Observable<GeneralResponseDto> {
        const apiPreferences: Partial<Preferences> = {
            languageCode: preferences.languageCode,
            weightUnit: preferences.weightUnit,
            showByPeriod: preferences.showByPeriod,
            setDurationUnit: preferences.setDurationUnit,
            trainingSplitId: preferences.trainingSplitId,
        };
        let apiResponse: GeneralResponseDto;
        return this._http
            .put<GeneralResponseDto>(
                environment.apiUrl + `/api/preferences/${preferences.userId}`,
                {
                    preferences: apiPreferences,
                    preferenceChanged: preferenceChanged,
                },
            )
            .pipe(
                switchMap((response: GeneralResponseDto) => {
                    apiResponse = response;
                    return this._translateService.use(preferences.languageCode).pipe(
                        tap(async (_) => {
                            this._preferencesStoreService.emitPreferences(preferences);
                            if (response.Message) {
                                await this._toastControllerService.displayToast({
                                    message: this._translateService.instant(response.Message),
                                    duration: MESSAGE_DURATION.GENERAL,
                                    color: 'primary',
                                });
                            }
                        }),
                        switchMap((_) => {
                            if (
                                preferenceChanged === 'weightUnit' ||
                                preferenceChanged === 'setDurationUnit'
                            ) {
                                return this._newTrainingStoreService
                                    .updateNewTrainingPreferences(preferenceChanged, {
                                        weightUnit: apiPreferences.weightUnit,
                                        setDurationUnit: apiPreferences.setDurationUnit,
                                    })
                                    .pipe(switchMap((_) => of(apiResponse)));
                            }
                            return of(apiResponse);
                        }),
                    );
                }),
            );
    }
}
