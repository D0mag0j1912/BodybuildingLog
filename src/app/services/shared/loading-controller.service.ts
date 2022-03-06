import { Injectable } from '@angular/core';
import { LoadingController, LoadingOptions } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LoadingControllerService {

    constructor(
        private readonly translateService: TranslateService,
        private readonly loadingController: LoadingController,
    ) { }

    async displayLoader(options: LoadingOptions): Promise<void> {
        const loading = await this.loadingController.create({
            message: this.translateService.instant(options.message as string),
            keyboardClose: true,
        });
        await loading.present();
    }

    async dismissLoader(): Promise<void> {
        await this.loadingController.dismiss();
    }
}
