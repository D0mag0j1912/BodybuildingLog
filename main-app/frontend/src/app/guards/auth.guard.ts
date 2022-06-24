import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlTree } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { AuthStoreService } from '../services/store/auth/auth-store.service';

@Injectable()
export class AuthGuard implements CanLoad {

    constructor(
        private readonly authStoreService: AuthStoreService,
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
                map(isAuth => {
                    if (!isAuth) {
                        return this.router.createUrlTree(['/auth/login']);
                    }
                    return true;
                }),
            );
    }
}
