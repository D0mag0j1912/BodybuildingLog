import { FormControl } from '@angular/forms';

export type FormType<SomeType> = {
    -readonly[P in keyof Omit<SomeType, '_id'>]-?: FormControl<SomeType[P]>;
};
