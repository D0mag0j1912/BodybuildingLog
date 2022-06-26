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
        private readonly preferencesService: PreferencesService,
        private readonly preferencesStoreService: PreferencesStoreService,
        private readonly authStoreService: AuthStoreService,
        private readonly translateService: TranslateService,
        private readonly router: Router,
    ) { }

    canLoad(_route: Route): Observable<boolean | UrlTree> {
        return this.authStoreService.isAuth$
            .pipe(
                take(1),
                switchMap(isAuth => {
                    if (!isAuth) {
                        return from(this.authStoreService.autoLogin());
                    }
                    else {
                        return of(isAuth);
                    }
                }),
                switchMap(isAuth => {
                    if (!isAuth) {
                        return of(isAuth);
                    }
                    else {
                        return this.authStoreService.loggedUser$
                            .pipe(
                                take(1),
                                switchMap(loggedUser => {
                                    if (loggedUser) {
                                        return this.preferencesService.getPreferences(loggedUser._id)
                                            .pipe(
                                                tap(preferences => this.preferencesStoreService.emitPreferences(preferences)),
                                                switchMap(preferences => this.translateService.use(preferences.languageCode || 'en')),
                                                switchMap(_ => of(isAuth)),
                                            );
                                    }
                                    else {
                                        return of(isAuth);
                                    }
                                }),
                            );
                    }
                }),
                map(isAuth => {
                    if (!isAuth) {
                        return this.router.createUrlTree(['/auth/login']);
                    }
                    return true;
                }),
            );
    }
}
