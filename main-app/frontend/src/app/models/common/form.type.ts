import { FormControl, FormGroup } from '@angular/forms';
import { RawType } from './raw.type';

export type FormType<T, K = void> = {
    [P in keyof RawType<T>]-?: T[P] extends K ? FormGroup<FormType<K>> : FormControl<T[P]>;
};
