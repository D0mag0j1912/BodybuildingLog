import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable()
export class SignupService {

    constructor(
        private readonly _http: HttpClient,
    ) { }

    getEmails(email: string): Observable<boolean> {
        const params = `?email=${email}`;
        return this._http.get<boolean>(environment.BACKEND + '/auth/get_all_emails' + params);
    }
}
