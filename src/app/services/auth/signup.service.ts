import { Injectable } from "@angular/core";
import {environment} from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SignupService {

    constructor(
        private readonly http: HttpClient
    ){}

    //Metoda koja vraća Observable sa svim registriranim emailovima
    getEmails(email: string)
        : Observable<boolean> {
        const params = `?email=${email}`;
        return this.http.get<boolean>(environment.backend + '/getAllEmails' + params);
    }
}
