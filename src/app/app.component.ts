import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthResponseData } from './models/auth/auth-data.model';
import { AuthService } from './services/auth/auth.service';
import { NewTrainingService } from './services/training/new-training.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    opened: boolean = false;

    constructor(
        private readonly authService: AuthService,
        private readonly newTrainingService: NewTrainingService,
        private readonly translateService: TranslateService,
    ){
        this.translateService.setDefaultLang('en');
        const language: AuthResponseData = JSON.parse(localStorage.getItem('userData'));
        this.translateService.use(language?.preferences.language || 'en').subscribe(() => console.log('tu sam'));
    }

    ngOnInit(): void {
        this.authService.autoLogin();
        this.newTrainingService.keepTrainingState();
    }
}
