import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class ToastControllerService {
    constructor(
        private readonly translateService: TranslateService,
        private readonly toastController: ToastController,
    ) {}

    async displayToast(options: ToastOptions): Promise<void> {
        const toast = await this.toastController.create({
            message: this.translateService.instant(options?.message as string),
            duration: options.duration,
            color: options.color,
        });
        await toast.present();
    }
}
