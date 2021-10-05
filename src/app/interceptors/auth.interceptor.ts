import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

//Ako želimo injectat drugi servis u ovaj
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private readonly authService: AuthService
    ){}
    //Za svaki poslani zahtjev prema backendu, ova metoda se pokreće
    intercept(request: HttpRequest<unknown>, next: HttpHandler)
        :Observable<HttpEvent<unknown>> {
        //Dohvaćam token
        const token = this.authService.getToken();
        //Kreiram klonirani request te u njega stavljam token
        const authRequest = request.clone({
            headers: request.headers.set('authorization', 'Bearer ' + token)
        });
        return next.handle(authRequest);
    }
}
