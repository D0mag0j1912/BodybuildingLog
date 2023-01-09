import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Preferences } from '../../../models/common/preferences.model';
import { environment } from '../../../../environments/environment';
import { AuthModel } from '../../../models/auth/auth-data.model';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { LanguageCodeType, WeightUnitType } from '../../../models/common/preferences.type';
import { AuthStoreService } from '../../store/auth/auth-store.service';
import { LoginRequestDto } from '../../../../api/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private _http: HttpClient, private _authStoreService: AuthStoreService) {}

    signup(
        language: LanguageCodeType,
        weightUnit: WeightUnitType,
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
        return this._http.post<AuthResponseData>(environment.apiUrl + '/auth/signup', {
            ...signupData,
            ...preferences,
        });
    }

    login(email: string, password: string): Observable<AuthResponseData> {
        const authData: LoginRequestDto = {
            email,
            password,
        };
        return this._http.post<AuthResponseData>(environment.apiUrl + '/auth/login', authData).pipe(
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
                }
            }),
        );
    }
}
