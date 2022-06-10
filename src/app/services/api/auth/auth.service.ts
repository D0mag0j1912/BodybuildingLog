import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Preferences } from 'src/app/models/preferences.model';
import { environment } from '../../../../environments/environment';
import { Login, Signup } from '../../../models/auth/auth-data.model';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { LanguageCode, WeightFormat } from '../../../models/preferences.model';
import { AuthStateService } from '../../state/auth/auth-state.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly authStateService: AuthStateService,
    ) { }

    signup(
        language: LanguageCode,
        weightFormat: WeightFormat,
        email: string,
        password: string,
        confirmPassword: string,
    ): Observable<AuthResponseData> {
        const signupData: Signup = {
            Email: email,
            Password: password,
            ConfirmPassword: confirmPassword,
        };
        const preferences: Partial<Preferences> = {
            LanguageCode: language,
            WeightFormat: weightFormat,
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
        const authData: Login = {
            Email: email,
            Password: password,
        };
        return this.http.post<AuthResponseData>(environment.BACKEND + '/auth/login', authData)
            .pipe(
                tap(async (response: AuthResponseData) => {
                    if (response.Token) {
                        this.authStateService.emitLoggedUser(response);
                        this.authStateService.emitIsAuth(true);
                        this.authStateService.setToken(response.Token);
                        const expiresInDuration = response.ExpiresIn;
                        this.authStateService.setAuthTimer(expiresInDuration);
                        const now = new Date();
                        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                        this.authStateService.saveLS(
                            this.authStateService.getToken(),
                            expirationDate,
                            response._id,
                        );
                        await this.router.navigate(['/training/new-training']);
                    }
                }),
            );
    }

}
