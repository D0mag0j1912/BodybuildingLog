import { KeyValue } from '@angular/common';

type NumbersType = 'zero' | 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven';

export const NUMBER_MAPPER: KeyValue<number, NumbersType>[] = [
    {
        key: 0,
        value: 'zero',
    },
    {
        key: 1,
        value: 'one',
    },
    {
        key: 2,
        value: 'two',
    },
    {
        key: 3,
        value: 'three',
    },
    {
        key: 4,
        value: 'four',
    },
    {
        key: 5,
        value: 'five',
    },
    {
        key: 6,
        value: 'six',
    },
    {
        key: 7,
        value: 'seven',
    },
];
