import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthResponseData } from './models/auth/auth-data.model';
import { LocalStorageItems } from './models/common/interfaces/common.model';
import { AuthService } from './services/auth/auth.service';
import { NewTrainingService } from './services/training/new-training.service';

@Component({
    selector: 'bl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

    constructor(
        private readonly authService: AuthService,
        private readonly newTrainingService: NewTrainingService,
        private readonly translateService: TranslateService,
    ){
        this.translateService.setDefaultLang('en');
        const language: AuthResponseData = JSON.parse(localStorage.getItem(LocalStorageItems.USER_DATA));
        this.translateService.use(language?.preferences.language || 'en').subscribe();
    }

    ngOnInit(): void {
        this.authService.autoLogin();
        this.newTrainingService.keepTrainingState();
    }
}
