import { Injectable } from "@angular/core";
import {environment} from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private readonly http: HttpClient
    ){}

    //Metoda koja vraća Observable sa odgovorom servera je li lozinka odgovara emailu
    passwordFitsEmail(
        email: string,
        password: string
    ): Observable<boolean> {
        const params = `?email=${email}&password=${password}`;
        return this.http.get<boolean>(environment.backend + '/checkPass' + params);
    }
}
