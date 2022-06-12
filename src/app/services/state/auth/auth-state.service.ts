import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { LocalStorageItems } from '../../../models/common/interfaces/common.model';
import { Preferences } from '../../../models/preferences.model';

@Injectable({ providedIn: 'root' })
export class AuthStateService {

    private readonly _loggedUser$$: BehaviorSubject<AuthResponseData> = new BehaviorSubject<AuthResponseData>(null);
    readonly loggedUser$: Observable<AuthResponseData> = this._loggedUser$$.asObservable();

    private readonly _isAuth$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly isAuth$: Observable<boolean> = this._isAuth$$.asObservable();

    private tokenTimer: NodeJS.Timeout;
    private token: string;

    constructor(
        private readonly router: Router,
    ) { }

    getToken(): string {
        return this.token;
    }

    setToken(token: string): void {
        this.token = token;
    }

    getLoggedUser(): AuthResponseData {
        return { ...this._loggedUser$$.getValue() };
    }

    emitLoggedUser(loggedUser: AuthResponseData): void {
        this._loggedUser$$.next(loggedUser);
    }

    getIsAuth(): boolean {
        return this._isAuth$$.getValue();
    }

    emitIsAuth(isAuth: boolean): void {
        this._isAuth$$.next(isAuth);
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
            };
            const now: Date = new Date();
            const expiresIn: number = authData.ExpirationDate.getTime() - now.getTime();
            if (expiresIn > 0) {
                this.token = userData.Token;
                this.setAuthTimer(expiresIn / 1000);
                this.emitIsAuth(true);
                this.emitLoggedUser(authData);
            }
        }
    }

    async logout(): Promise<void> {
        this.token = null;
        this.emitIsAuth(false);
        clearTimeout(this.tokenTimer);
        this.clearLS();
        await this.router.navigate(['/auth/login']);
    }

    setAuthTimer(duration: number): void {
        this.tokenTimer = setTimeout(async () => {
            await this.logout();
        }, duration * 1000);
    }

    saveLS(
        token: string,
        expirationDate: Date,
        userId: string,
    ): void {
        const userData: AuthResponseData = {
            Token: token,
            ExpirationDate: expirationDate,
            _id: userId,
        };
        localStorage.setItem(LocalStorageItems.USER_DATA, JSON.stringify(userData));
    }

    private clearLS(): void {
        localStorage.removeItem(LocalStorageItems.USER_DATA);
        localStorage.removeItem(LocalStorageItems.TRAINING_STATE);
        localStorage.removeItem(LocalStorageItems.QUERY_PARAMS);
    }
}
