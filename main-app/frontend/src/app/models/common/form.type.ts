import { FormControl } from '@angular/forms';
import { RawType } from './raw.type';

export type FormType<T> = {
    [P in keyof RawType<T>]-?: FormControl<T[P]>;
};
