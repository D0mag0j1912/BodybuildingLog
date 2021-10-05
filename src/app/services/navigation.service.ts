import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { GeneralResponseData } from '../models/general-response.model';
import { Preferences } from "../models/preferences.model";
import { AuthService } from "./auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    constructor(
        private readonly http: HttpClient,
        private readonly authService: AuthService,
        private readonly translateService: TranslateService,
        private readonly snackBar: MatSnackBar
    ){}

    setPreferences(
        userId: string,
        language: string,
        weightFormat: string
    ): Observable<GeneralResponseData> {
        const preferences: Preferences = {
            language: language,
            weightFormat: weightFormat
        };
        return this.http.put<GeneralResponseData>(environment.backend + `/preferences/${userId}`, {
            preferences: preferences
        }).pipe(
            tap((response: GeneralResponseData) => {
                this.authService.updateUserData({
                    userId: userId,
                    language: language,
                    weightFormat: weightFormat
                } as Preferences);
                this.translateService.use(language);
                this.snackBar.open(this.translateService.instant(response.message), null, {
                    duration: 3000,
                    panelClass: 'app__snackbar'
                });
            })
        )
    }

}
