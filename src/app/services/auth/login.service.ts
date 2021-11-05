import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private readonly http: HttpClient,
    ){}

    passwordFitsEmail(
        email: string,
        password: string
    ): Observable<boolean> {
        const params = `?email=${email}&password=${password}`;
        return this.http.get<boolean>(environment.backend + '/check_pass' + params);
    }
}
