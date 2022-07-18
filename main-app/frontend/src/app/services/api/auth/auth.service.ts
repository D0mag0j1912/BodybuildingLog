import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Preferences } from '../../../models/common/preferences.model';
import { environment } from '../../../../environments/environment';
import { AuthModel } from '../../../models/auth/auth-data.model';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { LanguageCode, WeightUnit } from '../../../models/common/preferences.type';
import { AuthStoreService } from '../../store/auth/auth-store.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly authStoreService: AuthStoreService,
    ) { }

    signup(
        language: LanguageCode,
        weightFormat: WeightUnit,
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
            );
    }

}
