import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
    ) { }

    canLoad(_route: Route): Observable<boolean | UrlTree> {
        return this.authService.isAuth$.pipe(
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
