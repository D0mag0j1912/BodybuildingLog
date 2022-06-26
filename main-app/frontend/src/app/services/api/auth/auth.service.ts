import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Preferences } from '../../../models/common/preferences.model';
import { environment } from '../../../../environments/environment';
import { AuthModel } from '../../../models/auth/auth-data.model';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { LanguageCode, WeightFormat } from '../../../models/common/preferences.type';
import { PreferencesService } from '../../shared/preferences.service';
import { AuthStoreService } from '../../store/auth/auth-store.service';
import { PreferencesStoreService } from '../../store/shared/preferences-store.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly authStoreService: AuthStoreService,
        private readonly preferencesService: PreferencesService,
        private readonly preferencesStoreService: PreferencesStoreService,
    ) { }

    signup(
        language: LanguageCode,
        weightFormat: WeightFormat,
        email: string,
        password: string,
        confirmPassword: string,
    ): Observable<AuthResponseData> {
        const signupData: AuthModel = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        };
        const preferences: Partial<Preferences> = {
            languageCode: language,
            weightFormat: weightFormat,
        };
        return this.http.post<AuthResponseData>(environment.BACKEND + '/auth/signup', {
            signupData: signupData,
            preferences: preferences,
        });
    }

    login(
        email: string,
        password: string,
    ): Observable<AuthResponseData> {
        const authData: Partial<AuthModel> = {
            email: email,
            password: password,
        };
        return this.http.post<AuthResponseData>(environment.BACKEND + '/auth/login', authData)
            .pipe(
                tap(async (response: AuthResponseData) => {
                    if (response.Token) {
                        this.authStoreService.emitLoggedUser(response);
                        this.authStoreService.emitIsAuth(true);
                        this.authStoreService.setToken(response.Token);
                        const expiresInDuration = response.ExpiresIn;
                        this.authStoreService.setAuthTimer(expiresInDuration);
                        const now = new Date();
                        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                        await this.authStoreService.saveLS(
                            this.authStoreService.getToken(),
                            expirationDate,
                            response._id,
                        );
                        await this.router.navigate(['/training/new-training']);
                    }
                }),
                switchMap(response => this.preferencesService.getPreferences(response._id)
                    .pipe(
                        tap(preferences => this.preferencesStoreService.emitPreferences(preferences)),
                        switchMap(_ => of(response)),
                    )),
            );
    }

}
