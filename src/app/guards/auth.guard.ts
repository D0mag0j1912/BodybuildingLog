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
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree>  {
        return this.authService.isAuth$.pipe(
            take(1),
            map((isAuth: boolean) => {
                if (!isAuth) {
                    return this.router.createUrlTree(['/login']);
                }
                return true;
            }),
        );
    }

    canLoad(route: Route): Observable<boolean | UrlTree> {
        return this.authService.isAuth$.pipe(
            take(1),
            map((isAuth: boolean) => {
                if (!isAuth) {
                    return this.router.createUrlTree(['/login']);
                }
                return true;
            }),
        );
    }
}
