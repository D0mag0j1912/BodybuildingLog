import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { Preferences } from 'src/app/models/preferences.model';
import { environment } from '../../../environments/environment';
import { Login, Signup } from '../../models/auth/auth-data.model';
import { AuthResponseData } from '../../models/auth/auth-data.model';
import { LocalStorageItems } from '../../models/common/interfaces/common.model';
import { LanguageCode, WeightFormat } from '../../models/preferences.model';
@Injectable({ providedIn: 'root' })
export class AuthService {

    private readonly loggedUser$$: BehaviorSubject<AuthResponseData> = new BehaviorSubject<AuthResponseData>(null);
    readonly loggedUser$: Observable<AuthResponseData> = this.loggedUser$$.asObservable();

    private readonly isAuth$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly isAuth$: Observable<boolean> = this.isAuth$$.asObservable();

    private tokenTimer: NodeJS.Timeout;
    private token: string;

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly translateService: TranslateService,
    ) { }

    getToken(): string {
        return this.token;
    }

    updateUserData(preferences?: Preferences): void {
        //TODO: Ovdje treba pokupiti podatke iz Subjecta, a ne LS
        const userData: AuthResponseData = JSON.parse(localStorage.getItem(LocalStorageItems.USER_DATA));
        const updatedUserData: AuthResponseData = {
            ...userData,
            Preferences: {
                UserId: preferences.UserId,
                LanguageCode: preferences.LanguageCode,
                WeightFormat: 'kg',
            } as Preferences,
        };
        this.loggedUser$$.next({ ...updatedUserData });
        localStorage.setItem(LocalStorageItems.USER_DATA, JSON.stringify({ ...updatedUserData }));
    }

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
        return this.http.post<AuthResponseData>(environment.BACKEND + '/auth/login', authData).pipe(
            tap(async (response: AuthResponseData) => {
                if (response.Token) {
                    this.loggedUser$$.next(response);
                    this.isAuth$$.next(true);
                    this.token = response.Token as string;
                    const expiresInDuration: number = response.ExpiresIn as number;
                    this.setAuthTimer(expiresInDuration);
                    const now: Date = new Date();
                    const expirationDate: Date = new Date(now.getTime() + expiresInDuration * 1000);
                    this.saveLS(
                        this.token,
                        expirationDate,
                        response._id,
                        response.Preferences,
                    );
                    await this.router.navigate(['/training/new-training']);
                }
            }),
            mergeMap((response: AuthResponseData) =>
                this.translateService.use(response.Preferences.LanguageCode)
                    .pipe(
                        switchMap(_ => of(response)),
                    ),
            ),
        );
    }

    autoLogin(): void {
        if (JSON.parse(localStorage.getItem(LocalStorageItems.USER_DATA))) {
            const userData: AuthResponseData = JSON.parse(localStorage.getItem(LocalStorageItems.USER_DATA));
            if (!userData.Token || !userData.ExpirationDate) {
                return;
            }
            const authData: AuthResponseData = {
                Token: userData.Token,
                ExpirationDate: new Date(userData.ExpirationDate),
                _id: userData._id,
                Preferences: userData.Preferences,
            };
            const now: Date = new Date();
            const expiresIn: number = authData.ExpirationDate.getTime() - now.getTime();
            if (expiresIn > 0) {
                this.token = userData.Token;
                this.setAuthTimer(expiresIn / 1000);
                this.isAuth$$.next(true);
                this.loggedUser$$.next(authData);
            }
        }
    }

    async logout(): Promise<void> {
        this.token = null;
        this.isAuth$$.next(false);
        clearTimeout(this.tokenTimer);
        this.clearLS();
        await this.router.navigate(['/auth/login']);
    }

    private setAuthTimer(duration: number): void {
        this.tokenTimer = setTimeout(async () => {
            await this.logout();
        }, duration * 1000);
    }

    private saveLS(
        token: string,
        expirationDate: Date,
        userId: string,
        preferences: Preferences,
    ): void {
        const userData: AuthResponseData = {
            Token: token,
            ExpirationDate: expirationDate,
            _id: userId,
            Preferences: preferences,
        };
        localStorage.setItem(LocalStorageItems.USER_DATA, JSON.stringify(userData));
    }

    private clearLS(): void {
        localStorage.removeItem(LocalStorageItems.USER_DATA);
        localStorage.removeItem(LocalStorageItems.TRAINING_STATE);
        localStorage.removeItem(LocalStorageItems.ALL_EXERCISES);
    }
}
