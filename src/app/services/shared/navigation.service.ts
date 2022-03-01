import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MESSAGE_DURATION } from '../../constants/message-duration.const';
import { GeneralResponseData } from '../../models/general-response.model';
import { Preferences, WeightFormat } from '../../models/preferences.model';
import { Language } from '../../models/preferences.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class NavigationService {

    constructor(
        private readonly http: HttpClient,
        private readonly authService: AuthService,
        private readonly translateService: TranslateService,
        private readonly snackBar: MatSnackBar,
    ) {}

    setPreferences(
        userId: string,
        language: Language,
        weightFormat: WeightFormat,
    ): Observable<GeneralResponseData> {
        const preferences: Partial<Preferences> = {
            language: language,
            weightFormat: weightFormat,
        };
        return this.http.put<GeneralResponseData>(environment.BACKEND + `/preferences/${userId}`, { preferences: preferences }).pipe(
            tap(_ => {
                this.authService.updateUserData({
                    userId: userId,
                    language: language,
                    weightFormat: weightFormat,
                } as Preferences);
            }),
            switchMap((response: GeneralResponseData) =>
                this.translateService.use(language).pipe(
                    tap(_ => {
                        this.snackBar.open(this.translateService.instant(response.Message), null, {
                            duration: MESSAGE_DURATION.GENERAL,
                            panelClass: 'app__snackbar',
                        });
                    }),
                ),
            ),
        );
    }

}
