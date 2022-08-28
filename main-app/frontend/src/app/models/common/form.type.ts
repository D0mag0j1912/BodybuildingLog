import { FormControl } from '@angular/forms';

export type FormType<T> = {
    -readonly [P in keyof Omit<T, '_id'>]-?: FormControl<T[P]>;
};
