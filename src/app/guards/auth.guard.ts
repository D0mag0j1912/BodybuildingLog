import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthStoreService } from '../services/store/auth/auth-store.service';

@Injectable()
export class AuthGuard implements CanLoad {

    constructor(
        private readonly authStateService: AuthStoreService,
        private readonly router: Router,
    ) { }

    canLoad(_route: Route): Observable<boolean | UrlTree> {
        return this.authStateService.isAuth$
            .pipe(
                take(1),
                map((isAuth: boolean) => {
                    if (!isAuth) {
                        return this.router.createUrlTree(['/auth/login']);
                    }
                    return true;
                }),
            );
    }
}
