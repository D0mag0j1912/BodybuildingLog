import { isNeverCheck } from './is-never-check.helper';

export type DecimalPlaces = 1 | 2;

export function roundToDecimalPlaces(
    decimalPlaces: DecimalPlaces,
    value: number,
): string {
    switch (decimalPlaces) {
        case 1: {
            return (Math.round((value) * 10) / 10).toString();
        };
        case 2: {
            return (Math.round((value) * 100) / 100).toString();
        };
        default: {
            isNeverCheck(decimalPlaces);
        }
    }
}
