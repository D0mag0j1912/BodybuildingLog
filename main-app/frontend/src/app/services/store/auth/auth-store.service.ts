import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { map } from 'rxjs/operators';
import { AuthResponseData } from '../../../models/auth/auth-data.model';
import { StorageItems } from '../../../constants/enums/storage-items.enum';

@Injectable({ providedIn: 'root' })
export class AuthStoreService {
    private _loggedUser$ = new BehaviorSubject<AuthResponseData>(null);
    loggedUser$ = this._loggedUser$.asObservable();

    private _isAuth$ = new BehaviorSubject<boolean>(false);
    isAuth$ = this._isAuth$.asObservable();

    private tokenTimer: NodeJS.Timeout;
    private token: string;

    constructor(private _router: Router) {}

    getToken(): string {
        return this.token;
    }

    setToken(token: string): void {
        this.token = token;
    }

    getLoggedUser(): AuthResponseData {
        return { ...this._loggedUser$.getValue() };
    }

    emitLoggedUser(loggedUser: AuthResponseData): void {
        this._loggedUser$.next(loggedUser);
    }

    getIsAuth(): boolean {
        return this._isAuth$.getValue();
    }

    emitIsAuth(isAuth: boolean): void {
        this._isAuth$.next(isAuth);
    }

    autoLogin(): Observable<boolean> {
        return from(Storage.get({ key: StorageItems.USER_DATA })).pipe(
            map((storedData) => {
                if (!storedData || !storedData?.value) {
                    return false;
                }
                const userData: AuthResponseData = JSON.parse(storedData.value);
                if (!userData.Token || !userData.ExpirationDate) {
                    return false;
                }
                const authData: Partial<AuthResponseData> = {
                    Token: userData.Token,
                    ExpirationDate: new Date(userData.ExpirationDate),
                    _id: userData._id,
                };
                const now = new Date();
                const expiresIn = authData.ExpirationDate.getTime() - now.getTime();
                if (expiresIn > 0) {
                    this.token = userData.Token;
                    this.setAuthTimer(expiresIn / 1000);
                    this.emitIsAuth(true);
                    this.emitLoggedUser(authData);
                    return true;
                } else {
                    return false;
                }
            }),
        );
    }

    async logout(): Promise<void> {
        this.token = null;
        this.emitIsAuth(false);
        clearTimeout(this.tokenTimer);
        await this.clearData();
        await this._router.navigate(['/auth/login']);
    }

    setAuthTimer(duration: number): void {
        this.tokenTimer = setTimeout(async () => {
            await this.logout();
        }, duration * 1000);
    }

    async saveLS(token: string, expirationDate: Date, userId: string): Promise<void> {
        const userData: AuthResponseData = {
            Token: token,
            ExpirationDate: expirationDate,
            _id: userId,
        };
        await Storage.set({
            key: StorageItems.USER_DATA,
            value: JSON.stringify(userData),
        });
    }

    private async clearData(): Promise<void> {
        await Storage.remove({ key: StorageItems.USER_DATA });
        await Storage.remove({ key: StorageItems.TRAINING_STATE });
        await Storage.remove({ key: StorageItems.QUERY_PARAMS });
        await Storage.remove({ key: StorageItems.PAST_TRAININGS_SCROLL_WRAPPER });
    }
}
