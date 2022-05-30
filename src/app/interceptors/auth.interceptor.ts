import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateService } from '../services/state/auth/auth-state.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private readonly authStateService: AuthStateService,
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.authStateService.getToken();
        const authRequest: HttpRequest<unknown> = request.clone({ headers: request.headers.set('authorization', 'Bearer ' + token) });
        return next.handle(authRequest);
    }
}
