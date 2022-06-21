import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../services/store/auth/auth-store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private readonly authStoreService: AuthStoreService,
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.authStoreService.getToken();
        const authRequest: HttpRequest<unknown> = request.clone({ headers: request.headers.set('authorization', 'Bearer ' + token) });
        return next.handle(authRequest);
    }
}
