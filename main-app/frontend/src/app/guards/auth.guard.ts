import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlTree } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { from, Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { PreferencesService } from '../services/shared/preferences.service';
import { AuthStoreService } from '../services/store/auth/auth-store.service';
import { PreferencesStoreService } from '../services/store/shared/preferences-store.service';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(
        private _preferencesService: PreferencesService,
        private _preferencesStoreService: PreferencesStoreService,
        private _authStoreService: AuthStoreService,
        private _translateService: TranslateService,
        private _router: Router,
    ) {}

    canLoad(_route: Route): Observable<boolean | UrlTree> {
        return this._authStoreService.isAuth$.pipe(
            take(1),
            switchMap((isAuth) => {
                if (!isAuth) {
                    return from(this._authStoreService.autoLogin());
                } else {
                    return of(isAuth);
                }
            }),
            switchMap((isAuth) => {
                if (!isAuth) {
                    return of(isAuth);
                } else {
                    return this._authStoreService.loggedUser$.pipe(
                        take(1),
                        switchMap((loggedUser) => {
                            if (loggedUser) {
                                return this._preferencesService.getPreferences(loggedUser._id).pipe(
                                    tap((preferences) =>
                                        this._preferencesStoreService.emitPreferences(preferences),
                                    ),
                                    switchMap((preferences) =>
                                        this._translateService.use(
                                            preferences.languageCode || 'en',
                                        ),
                                    ),
                                    switchMap((_) => of(isAuth)),
                                );
                            } else {
                                return of(isAuth);
                            }
                        }),
                    );
                }
            }),
            map((isAuth) => {
                if (!isAuth) {
                    return this._router.createUrlTree(['/auth/login']);
                }
                return true;
            }),
        );
    }
}
