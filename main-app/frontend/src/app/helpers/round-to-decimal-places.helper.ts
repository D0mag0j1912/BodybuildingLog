import { isNeverCheck } from './is-never-check.helper';

export type DecimalPlaces = 1 | 2;

export function roundToDecimalPlaces(decimalPlaces: DecimalPlaces, value: number): number {
    switch (decimalPlaces) {
        case 1: {
            return Math.round(value * 10) / 10;
        }
        case 2: {
            return Math.round(value * 100) / 100;
        }
        default: {
            isNeverCheck(decimalPlaces);
        }
    }
}
