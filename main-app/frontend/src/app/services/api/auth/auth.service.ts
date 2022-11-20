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
        private _http: HttpClient,
        private _router: Router,
        private _authStoreService: AuthStoreService,
    ) {}

    signup(
        language: LanguageCode,
        weightUnit: WeightUnit,
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
            weightUnit: weightUnit,
        };
        return this._http.post<AuthResponseData>(environment.BACKEND + '/auth/signup', {
            signupData: signupData,
            preferences: preferences,
        });
    }

    login(email: string, password: string): Observable<AuthResponseData> {
        const authData: Partial<AuthModel> = {
            email: email,
            password: password,
        };
        return this._http
            .post<AuthResponseData>(environment.BACKEND + '/auth/login', authData)
            .pipe(
                tap(async (response: AuthResponseData) => {
                    if (response.Token) {
                        this._authStoreService.emitLoggedUser(response);
                        this._authStoreService.emitIsAuth(true);
                        this._authStoreService.setToken(response.Token);
                        const expiresInDuration = response.ExpiresIn;
                        this._authStoreService.setAuthTimer(expiresInDuration);
                        const now = new Date();
                        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                        await this._authStoreService.saveLS(
                            this._authStoreService.getToken(),
                            expirationDate,
                            response._id,
                        );
                        await this._router.navigate(['/training/new-training']);
                    }
                }),
            );
    }
}
