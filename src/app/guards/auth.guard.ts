import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
    ) { }

    canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree>  {
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
