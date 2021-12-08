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
import { Language, WeightFormat } from '../../models/preferences.model';
@Injectable()
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
    ) {}

    getToken(): string {
        return this.token;
    }

    updateUserData(preferences?: Preferences): void {
        //TODO: Ovdje treba pokupiti podatke iz Subjecta, a ne LS
        const userData: AuthResponseData = JSON.parse(localStorage.getItem('userData'));
        const updatedUserData: AuthResponseData = {
            ...userData,
            preferences: {
                userId: preferences.userId,
                language: preferences.language,
                weightFormat: 'kg',
            } as Preferences,
        };
        this.loggedUser$$.next({ ...updatedUserData });
        localStorage.setItem('userData', JSON.stringify({ ...updatedUserData }));
    }

    signup(
        language: Language,
        weightFormat: WeightFormat,
        email: string,
        password: string,
        confirmPassword: string,
    ): Observable<AuthResponseData> {
        const signupData: Signup = {
            email,
            password,
            confirmPassword,
        };
        const preferences: Partial<Preferences> = {
            language: language,
            weightFormat: weightFormat,
        };
        return this.http.post<AuthResponseData>(environment.BACKEND + '/signup', {
            signupData: signupData,
            preferences: preferences,
        });
    }

    login(
        email: string,
        password: string,
    ): Observable<AuthResponseData> {
        const authData: Login = {
            email: email,
            password: password,
        };
        return this.http.post<AuthResponseData>(environment.BACKEND + '/login', authData).pipe(
            tap(async (response: AuthResponseData) => {
                if(response.token){
                    this.loggedUser$$.next(response);
                    this.isAuth$$.next(true);
                    this.token = response.token as string;
                    const expiresInDuration: number = response.expiresIn as number;
                    this.setAuthTimer(expiresInDuration);
                    const now: Date = new Date();
                    const expirationDate: Date = new Date(now.getTime() + expiresInDuration * 1000);
                    this.saveLS(
                        this.token,
                        expirationDate,
                        response._id,
                        response.preferences,
                    );
                    await this.router.navigate(['/training/new-training']);
                }
            }),
            mergeMap((response: AuthResponseData) =>
                this.translateService.use(response.preferences.language).pipe(
                    switchMap(_ => of(response)),
                ),
            ),
        );
    }

    autoLogin(): void {
        if(JSON.parse(localStorage.getItem('userData'))){
            const userData: AuthResponseData = JSON.parse(localStorage.getItem('userData'));
            if(!userData.token || !userData.expirationDate){
                return;
            }
            const authData: AuthResponseData = {
                token: userData.token,
                expirationDate: new Date(userData.expirationDate),
                _id: userData._id,
                preferences: userData.preferences,
            };
            const now: Date = new Date();
            const expiresIn: number = authData.expirationDate.getTime() - now.getTime();
            if(expiresIn > 0){
                this.token = userData.token;
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
        await this.router.navigate(['/login']);
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
            token: token,
            expirationDate: expirationDate,
            _id: userId,
            preferences: preferences,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    private clearLS(): void {
        localStorage.removeItem('userData');
        localStorage.removeItem('trainingState');
        localStorage.removeItem('allExercises');
    }
}
