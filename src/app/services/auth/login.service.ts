import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable()
export class LoginService {

    constructor(
        private readonly http: HttpClient,
    ){}

    passwordFitsEmail(
        email: string,
        password: string,
    ): Observable<boolean> {
        const params = `?email=${email}&password=${password}`;
        return this.http.get<boolean>(environment.BACKEND + '/auth/check_pass' + params);
    }
}
