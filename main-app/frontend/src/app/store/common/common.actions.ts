import { ToastOptions } from '@ionic/angular';
import { createAction, props } from '@ngrx/store';

export const showToastMessage = createAction(
    '[Common] Show toast message',
    props<{ color: ToastOptions['color']; message: string }>(),
);
